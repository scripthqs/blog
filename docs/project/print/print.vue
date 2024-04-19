<template>
  <el-card class="main-page">
    <div class="main-page__inner">
      <el-form ref="form" inline label-width="160px" :model="form" :rules="rules">
        <el-row>
          <el-col :span="24">
            <el-form-item :label="$t('F:型号编码')" prop="modelCode">
              <el-input
                v-model="form.modelCode"
                class="input-width"
                clearable
                maxlength="50"
                :placeholder="$t('N:请输入')"
              />
            </el-form-item>
          </el-col>

          <el-col :span="24">
            <el-form-item :label="$t('F:生产周期')" prop="dc">
              <el-date-picker
                v-model="form.dc"
                maxlength="50"
                :placeholder="$t('N:选择日期')"
                type="date"
                value-format="yyyy-MM-dd"
              />
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item :label="$t('F:物料批次')" prop="materialBatchNumber">
              <el-input
                v-model="form.materialBatchNumber"
                class="input-width"
                clearable
                maxlength="50"
                :placeholder="$t('N:请输入')"
              />
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item :label="$t('F:物料型号规格')" prop="specModel">
              <el-input
                v-model="form.specModel"
                class="input-width"
                clearable
                maxlength="50"
                :placeholder="$t('N:请输入')"
              />
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item :label="$t('F:标签数量')" prop="reelIdCount">
              <el-input-number
                v-model="form.reelIdCount"
                class="input-width"
                clearable
                :max="500"
                maxlength="50"
                :min="1"
                :placeholder="$t('N:请输入')"
                :precision="0"
              />
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>

      <div class="main-page__footer">
        <el-button class="print-btn" :loading="isLoading" type="primary" @click="print">
          {{ $t('B:打印') }}
        </el-button>
      </div>
    </div>
    <PrintModal ref="PrintModalRef" :print-list="printList" />
  </el-card>
</template>

<script>
import { reelIdLabelPrintf } from '@/api/solder-paste-management'
import { ymdNodelimiter } from '@/utils/format/date'

import PrintModal from './components/PrintModal.vue'

export default {
  name: 'OperationLogs',
  components: { PrintModal },
  data() {
    return {
      form: {
        modelCode: '',
        dc: '',
        materialBatchNumber: '',
        specModel: '',
        reelIdCount: undefined,
      },
      rules: {
        modelCode: [{ required: true, message: this.$t('N:请输入'), trigger: 'change' }],
        dc: [{ required: true, message: this.$t('N:请选择'), trigger: 'change' }],
        reelIdCount: [{ required: true, message: this.$t('N:请输入'), trigger: 'change' }],
      },
      printList: [],
      isLoading: false,
    }
  },
  methods: {
    async print() {
      // await this.$refs.form.validate()
      this.isLoading = true
      try {
        const params = {
          ...this.form,
          dc: this.form.dc ? ymdNodelimiter(this.form.dc) : '',
        }

        const { data } = await reelIdLabelPrintf(params)

        this.printList = []
        const min = Number(data.minRellId)
        const max = Number(data.maxRellId)

        for (let i = min; i <= max; i++) {
          // 生成ReelId的规则
          const num = `000000${i}`.slice(-data.minRellId.length)
          const reelId = `${data.reelIdPrefix}${num}`

          // 型号编码&数量&物料批次号&生产周期&物料规格型号&ReelId
          const qrCode = `${data.modelCode}&${data.reelIdCount}&${data.materialBatchNumber}&${data.dc}&${data.specModel}&${reelId}`

          this.printList = []
          this.printList.push({
            key: i,
            modelCode: data.modelCode,
            modelDesc: data.modelDesc,
            specModel: data.specModel,
            dc: data.dc,
            dcFormat: data.dcFormat,
            printfTime: data.printfTime,
            reelId,
            qrCode,
          })
        }

        this.$nextTick(() => {
          setTimeout(() => {
            this.isLoading = false
            this.$refs.PrintModalRef.open()
          }, 1000)
        })
      } catch (e) {
        console.log(e)
      } finally {
        this.printList = []
        for (let i = 0; i <= 10; i++) {
          this.printList.push({
            key: i,
            modelCode: 222,
            modelDesc: 33,
            specModel: '4_441_111_111',
            dc: 555,
            dcFormat: 66,
            printfTime: '2024-02-01 12:12:00',
            reelId: i,
            qrCode: 9_876_543_210 + i,
          })
        }
        this.$nextTick(() => {
          setTimeout(() => {
            this.isLoading = false
            this.$refs.PrintModalRef.open()
          }, 1000)
        })
        this.isLoading = false
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.main-page {
  position: relative;

  &__inner {
    margin-top: 20px;

    .input-width {
      width: 210px;
    }
  }

  &__footer {
    margin-top: 10px;
    margin-left: 160px;

    .print-btn {
      width: 80px;
      height: 40px;
    }
  }
}
</style>

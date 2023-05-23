# 数据缓存

## uni.setStorage

`uni.setStorage` 的[官方文档](https://uniapp.dcloud.io/api/storage/storage?id=setstorage)，将数据存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容，这是一个异步接口。

```vue
setStorage(){
    uni.setStorage({
      key: 'storage_key',
         data: 'hello',
         success: function () {
             console.log('缓存成功');
         }
    })
   }
```

## uni.setStorageSync

将 data 存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容，这是一个同步接口。

## uni.getStorage

从本地缓存中异步获取指定 key 对应的内容。

```vue
getStorage(){
    uni.getStorage({
     key: 'storage_key',
     success(res){
      console.log(res.data)
     }
    })
   }
```

## uni.getStorageSync

从本地缓存中同步获取指定 key 对应的内容。

## uni.removeStorage

从本地缓存中异步移除指定 key。

```vue
removeStorage(){
    uni.removeStorage({
      key: 'storage_key',
         success(res) {
             console.log('移除缓存数据');
         }
    })
   }
```

## uni.removeStorageSync

从本地缓存中同步移除指定 key。

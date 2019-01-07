# book-store by now.sh

```
$docker run -it --name book-store -p 3000:3000 -v $(pwd):/home/developer node:10 bash
root@bbe11a74b539:/home/developer# npm i -g --unsafe-perm now
root@bbe11a74b539:/home/developer# npm install
root@bbe11a74b539:/home/developer# now secret add val 123
root@bbe11a74b539:/home/developer# now alias book-store
root@bbe11a74b539:/home/developer# now -e MY_VARIABLE=@val
```
https://book-store.now.sh/  
https://book-store.now.sh/api/book/1.0/get  
https://book-store.now.sh/_src  

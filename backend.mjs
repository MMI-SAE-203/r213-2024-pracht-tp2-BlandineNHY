import PocketBase from "pocketbase";
const pb = new PocketBase('http://127.0.0.1:8090');

try {
  const record = await pb.collection('maison').getFullList();
  console.log(record);
}catch(error){
  console.log(error);
}
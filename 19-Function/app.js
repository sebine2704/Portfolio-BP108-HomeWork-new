//Tapsiriq
//1- 2 ədədin cəmini tapan funskiya yazın. Ədədlər parametr olaraq verilməlidir.

// let sumnumbs =(firstnum,secondnum)=>{
//   console.log(firstnum+secondnum)
// }
// sumnumbs(35, 40)



//2- 2 ədədin hasili tapan funskiya yazın. Ədədlər parametr olaraq verilməlidir.
// let sumnumbs =(firstnum,secondnum)=>{
//    console.log(firstnum*secondnum)
//   }
//   sumnumbs(35, 4)
  
// 3- 2 ədədin bütün riyazi əməlləri(+ - * /) yerinə yetirə bilən funksiya yazın. Funksiya ədədləri və əməliyyatı parametr

// let alloperation =(firstnum,secondnum)=>{
//     console.log(firstnum+secondnum)
//     console.log(firstnum-secondnum)
//     console.log(firstnum*secondnum)
  
//     console.log(firstnum/secondnum)
 
// }
// alloperation(5,10)


//4- Parametr olaraq daxil edilən 2 ədəddən hansının böyük olduğunu return edən funksiya yazın
// let max =(a,b)=>{
//   if(a>b){
//     return a
//   }
//   else{
//     return b
//   }
// }
// console.log(max(5,20));



//7- Parametr olaraq qəbul edilən arrayın elementləri cəmini hesablayan funksiya yazın.
// let arr =[1, 2, 3]
// let sumarr =(Array)=>{
//   let sum=0
//   for (let i = 0; i < Array.length; i++) {
//     sum+=Array[i]
    
//   }
//   return sum
// }
// console.log(sumarr(arr))



//8- Parametr olaraq qəbul edilən arrayın yalnız rəqəm olan elementləri cəmini hesablayan funksiya yazın.
// let arr =["boy", "girl", 3, "teacher", 9 ]
// let sum=0
// let numsum =(array)=>{
//   for (let i = 0; i < array.length; i++) {
//     if(typeof array[i]=="number")
//     sum+=array[i]
// }
// return sum
// }
// console.log(numsum(arr))

//9- Parametr olaraq qəbul edilən array-in elementlərini tərsinə düzən funksiya yazın.
// let arr =["boy", "girl", 3, 9, "teacher" ]
// let reversearr=(array)=>{
//     return array.reverse()
// }
// console.log(reversearr(arr))

//10- Parametr olaraq söz qəbul edən və sözü tərsinə yazan funksiya yazın.
// let reverseword=(word)=>{
//   if(typeof word !="number"){
//     return word.split("").reverse().join("")
// }
// }
// console.log(reverseword("book"))


let students = [
  {
  id: 1,
  name: "Nurane",
  surname: "Ismayilzade",
  age: 21,
  hobbies: ["music", "walking", "watchingfilm"],
  student: true,
  teacher: [
  { id: 1, name: "gurban" },
  { id: 2, name: "hajar" },
  { id: 3, name: "cavid" },
  { id: 4, name: "alisa" },
  ],
  loginDetail: { username: "nurana21", password: "nunu123" },
  gender: "girl",
  boyfriendGirlfriend: false,
  fail: false,
  avgPoint: 88,
  salaryAZN: 144,
  university: "BDU",
  },
  {
  id: 2,
  name: "Gizilgul",
  surname: "Allahverdiyeva",
  age: 20,
  hobbies: ["book", "writing code"],
  student: true,
  teacher: [
  { id: 1, name: "gurban" },
  { id: 2, name: "hajar" },
  { id: 3, name: "babaxan" },
  { id: 4, name: "gulshen" },
  ],
  loginDetail: { username: "allahverdieva1", password: "salam123" },
  gender: "girl",
  boyfriendGirlfriend: true,
  fail: false,
  avgPoint: 70,
  salaryAZN: 100,
  university: "BDU",
  },
  {
  id: 3,
  name: "Xanim",
  surname: "Nuriyeva",
  age: 21,
  hobbies: ["book", "music"],
  student: true,
  teacher: [
  { id: 1, name: "gurban" },
  { id: 2, name: "hajar" },
  { id: 3, name: "hikmet" },
  { id: 4, name: "gulsen" },
  ],
  loginDetail: { username: "xanim123", password: "salamBaku" },
  gender: "girl",
  boyfriendGirlfriend: false,
  fail: false,
  avgPoint: 80,
  salaryAZN: 145,
  university: "BDU",
  },
  {
  id: 4,
  name: "Minaya",
  surname: "Binnetova",
  age: 21,
  hobbies: ["book", "gaming", "movie", "music"],
  student: true,
  teacher: [
  { id: 1, name: "gurban" },
  { id: 2, name: "hajar" },
  { id: 3, name: "anar" },
  ],
  loginDetail: { username: "binnetova", password: "hello123" },
  gender: "girl",
  boyfriendGirlfriend: false,
  fail: false,
  avgPoint: 90,
  salaryAZN: 142,
  university: "BDU",
  },
  {
  id: 5,
  name: "Sabina",
  surname: "Hatamli",
  age: 21,
  hobbies: ["shopping", "listen to music"],
  student: true,
  teacher: [
  { id: 1, name: "gurban" },
  { id: 2, name: "hajar" },
  { id: 3, name: "Mirvari" },
  ],
  loginDetail: { username: "sebine123", password: "salam123" },
  gender: "girl",
  boyfriendGirlfriend: true,
  fail: false,
  avgPoint: 81,
  salaryAZN: 146,
  university: "BDU",
  },
  
  {
  id: 6,
  name: "Ləman",
  surname: "Şamilova",
  age: 20,
  hobbies: [
  "watching movies",
  "reading books",
  "painting",
  " walking",
  " listen to music",
  ],
  student: true,
  teacher: [
  { id: 1, name: "gurban" },
  { id: 2, name: "hajar" },
  ],
  loginDetail: { username: "lemanshamilova", password: "salamBaku" },
  gender: "girl",
  boyfriendGirlfriend: false,
  fail: false,
  avgPoint: 85.8,
  salaryAZN: 145,
  university: "BDU",
  },
  {
  id: 7,
  name: "Narmin",
  surname: "Musayeva",
  age: 21,
  hobbies: ["book", "gaming", "painting", "walking"],
  student: true,
  teacher: [
  { id: 1, name: "gurban" },
  { id: 2, name: "hajar" },
  { id: 3, name: "fidan" },
  { id: 4, name: "Irada" },
  ],
  loginDetail: {
  username: "narmin0",
  password: "narmin01",
  },
  gender: "girl",
  boyfriendGirlfriend: false,
  fail: false,
  avgPoint: 80,
  salaryAZN: 196,
  university: "BDU",
  },
  
  {
  id: 8,
  name: "Fatima",
  surname: "Akhundzada",
  age: 20,
  hobbies: ["drawing", "sleeping"],
  student: true,
  teacher: [
  { id: 1, name: "gurban" },
  { id: 2, name: "hajar" },
  { id: 3, name: "Valida" },
  ],
  loginDetail: { username: "aynur123", password: "salamBaku" },
  gender: "girl",
  boyfriendGirlfriend: true,
  fail: false,
  avgPoint: 76,
  salaryAZN: 100,
  university: "BDU",
  },
  {
  id: 9,
  name: "Elmir",
  surname: "Huseynov",
  age: 21,
  hobbies: ["book", "ice skating", "Tennis", "Karting"],
  student: true,
  teacher: [
  { id: 1, name: "Gurban" },
  { id: 2, name: "Hajar" },
  { id: 3, name: "Morad" },
  { id: 4, name: "Fikrat" },
  ],
  loginDetail: { username: "huseynovelmirr", password: "maxverstappen" },
  gender: "man",
  boyfriendGirlfriend: false,
  fail: true,
  avgPoint: 76,
  salaryAZN: 120,
  university: "BDU",
  },
  {
  id: 10,
  name: "Fidan",
  surname: "Rehimli",
  age: 21,
  hobbies: ["book", "gaming"],
  student: true,
  teacher: [
  { id: 1, name: "gurban" },
  { id: 2, name: "hajar" },
  { id: 3, name: "Turan" },
  ],
  loginDetail: { username: "fidan123", password: "fidanrahimli" },
  gender: "girl",
  boyfriendGirlfriend: true,
  fail: true,
  avgPoint: 75,
  salaryAZN: 98,
  university: "BDU",
  },
  {
  id: 11,
  name: "Aynur",
  surname: "Aynurova",
  age: 20,
  hobbies: ["book", "gaming"],
  teacher: [
  { id: 1, name: "gurban" },
  { id: 2, name: "hajar" },
  ],
  loginDetail: { username: "aynur123", password: "salamBaku" },
  gender: "girl",
  boyfriendGirlfriend: true,
  fail: true,
  avgPoint: 81,
  salaryAZN: 120,
  university: "BDU",
  },
  
  {
  id: 12,
  name: "Elman",
  surname: "Muradov",
  age: 20,
  hobbies: [
  "book",
  "gaming",
  "sking",
  "wrestling",
  "swiming",
  "arguing about philosophy",
  "solving sudoku",
  "hiking",
  "walking",
  ],
  student: true,
  teacher: [
  { id: 1, name: "gurban" },
  { id: 2, name: "hajar" },
  { id: 3, name: "jale" },
  { id: 4, name: "akhmed" },
  ],
  loginDetail: { username: "elman17", password: "elman12345" },
  gender: "girl",
  boyfriendGirlfriend: false,
  fail: true,
  avgPoint: 76,
  salaryAZN: 100,
  university: "BDU",
  },
  ];





    
//task1- Bütün elementləri konsola yazın

// let allelements = (arr) => {
//   for(let i=0; i<arr.length; i++){
//     console.log(arr[i])
// }
// }
// allelements(students)



//task2- Bütün tələbələrin adlarını konsola yazın - ad: Qurban
// let allname = (arr) => {
//   for(let i=0; i<arr.length; i++){
//     console.log(`Ad: ${arr[i].name}`)
//   }
// }
// allname(students)

//task3 - Bütün tələbələrin adlarını və soyadlarını konsola yazın - ad: Qurban, soyad: Qurbanzada
// let fullname = (arr) =>{
//   for(let i=0; i<arr.length; i++){
//     console.log(`Ad: ${arr[i].name} ,`, `Soyad: ${arr[i].surname}`);
// }
// }
// fullname(students)


//task4 - Kəsri olan tələbələrin ad və soyadını çapa verin
// let failfullname = (arr) =>{
//   for(let i=0; i<arr.length; i++){
//     if(arr[i].fail ==true){
//         console.log(arr[i].name, arr[i].surname);
//     }            
// }
// }
// failfullname(students)



//task5- - Ən çox hobbisi olan tələbənin ad və hobbilərini çapa verin
// let maxhobbies = (arr) =>{
//   let max = arr[0].hobbies.length;
//   let box = arr[0].name
//   let box2 = arr[0].hobbies
//   for (let i = 0; i < arr.length; i++) {
//     if(arr[i].hobbies.length >max){
//       max = arr[i].hobbies.length
//       box = arr[i].name
//       box2 = arr[i].hobbies
//     }
//   }
//   console.log(box ,box2)
// }
// maxhobbies(students)


//task6 - Ortalaması ən böyük olan tələbənin ad və soyadını çapa verin
// let maxavgpoints = (arr) =>{
// let max = arr[0].avgPoint;
// let box = arr[0].name;
// let box2 = arr[0].surname
// for(let i=0; i<arr.length; i++){
//     if(arr[i].avgPoint>max){
//         max = arr[i].avgPoint;
//         box = arr[i].name;
//         box2 = arr[i].surname;
//     }
// }
// console.log(box , box2);
// }
// maxavgpoints(students)

//task7 - Parolu ən uzun olan tələbənin username və adını çapa verin
// let longerpass = (arr) =>{
//   let max = arr[0].loginDetail.password.length;
//   let box1 = arr[0].name;
//   let box2 = arr[0].surname;
//   for (let i = 0; i < arr.length; i++) {
//     if(arr[i].loginDetail.password.length >max){
//       max = arr[i].loginDetail.password.length;
//       box1 = arr[i].name;
//       box2 = arr[i].surname;
//     }
//   }
//   console.log(box2 , box1);
// }
// longerpass(students)



//task8- boyfriend-i olan tələbələrin adlarını və username-lərini çapa verin
// let boyfriendTrue = (arr) =>{
//   for (let i = 0; i < arr.length; i++) {
//     if(arr[i].boyfriendGirlfriend ==true){
//       console.log("Ad:",arr[i].name , ", Username:",arr[i].surname)
//     } 
//   }
// }
// boyfriendTrue(students)


//task9 - yaşı 20 olan tələbələrin adlarını və müəllim adlarını çapa verin
// let twentyage = (arr) =>{
//   box = "";
//   for (let i = 0; i < arr.length; i++) {
//     if(arr[i].age==20){
//       for (let j = 0; j < arr[i].teacher.length; j++) {
//         box+=arr[i].teacher[j].name + " ";
//       }
//       console.log("name:", arr[i].name);
//       console.log("teacher:",box)
//     }
//   }
// }
// twentyage(students)



//task10- Bütün tələbələrə təqaüdlərinin dollar ilə görünməsini təmin edin
// let changedollar = (arr) =>{
//   for (let i = 0; i < students.length; i++) {
//     students[i].salaryUSD=students[i].salaryAZN*1.7;
//     console.log(students[i]);
//   } 
// }
// changedollar(students);



//task11- Müəllimlərin baş hərflərini böyük hərflə yazın
// let uppercase = (arr) =>{
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].teacher.length; j++) {
//       arr[i].teacher[j].name= arr[i].teacher[j].name[0].toUpperCase() +arr[i].teacher[j].name.slice(1)
//   }
//   console.log(arr[i])
//   }
// }
// uppercase(students)


//task12- Şifrəsində rəqəm olan tələbələri tapın
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!11
// for (let i = 0; i < students.length; i++) {
//   let pass = students[i].loginDetail.password;
//   for (let j= 0; j< pass.length; j++) {
//     if(pass[j])
    
//   }
// }


//task13 - Qızların arasında id-si 3 olan müəllimlərin adını deyin
// let teachersN = (arr) =>{
//   for (let i = 0; i < arr.length; i++) {
//     if(students[i].gender =="girl"){
//       for (let j = 0; j < arr[i].teacher.length; j++) {
//         if(arr[i].teacher[j].id==3){
//           console.log(arr[i].teacher[j].name)
//         }
//     }
//   }
//   }
// }
// teachersN(students)

//task14- Tələbələrin adlarını və müəllim saylarını çapa verin
// let teachNameNum = (arr) =>{
//   for (let i = 0; i < students.length; i++) {
//     console.log("telebe adi: ", students[i].name);
//     console.log( "muellim sayi: ",students[i].teacher.length);
//   }
// }
// teachNameNum(students)


//task15- Tələbələrin adlarını username və şifrələrindən ibarət yeni array yaradın [{name:qurban,username:qurban123,password:qqq123}]
// let newarr = (arr) =>{
//   let arr1= [];
//   for (let i = 0; i < arr.length; i++) {
//     arr1.push("{Name: "+""+arr[i].name,"username: "+"" +arr[i].loginDetail.username, "Password: "+ ""+`${arr[i].loginDetail.password} }` )

//   }
//   console.log(arr1)
// }
// newarr(students)


//task16 - Müəllimlərin adlarından sonra müəllim sözünü əlavə edin. String metod istifadə edin
// let addmuellim = (arr)=>{
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].teacher.length; j++) {
//       arr[i].teacher[j].name = arr[i].teacher[j].name.concat(" muellim");
//   }
//   console.log(arr[i])
//   }
// }
// addmuellim(students)


//task17 - Hamının şifrəsinin əvvəlinə 3 ədəd boşluq əlavə edin. String metod istifadə edin
// let space = (arr) =>{
//   for (let i = 0; i < students.length; i++) {
//     let passw =students[i].loginDetail.password ;
//     console.log(passw.padStart(passw.length + 3))
 
//  }
// }


//task18- Hamının şifrəsinin ilk 4 simvolu görsənsin yerdə qalanlar "*" ilə əvəz olunsun. String metod istifadə edin
// let secretpass = (arr) =>{
//   for (let i = 0; i < arr.length; i++) {
//     let pass = arr[i].loginDetail.password;
//     pass =pass.slice(0,4).padEnd(pass.length,"*")
//     console.log(pass)
//   }
// }
// secretpass(students)

//task19- Hamının soyadının uzunluğu adının uzunluğu qədər olsun. String metod istifadə edin
//!!!!!!!!!!!!!!!!!!!!!!!!
// for (let i = 0; i < students.length; i++) {
//   if(students[i].surname.length==students[i].name.length){
//     console.log(students[i])
    
//   }

// }


//task20- Bütün tələbələrin yaşlarının toplamı nə qədərdir
// let sumage = (arr) =>{
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum+=arr[i].age;
// }
// console.log(sum);
// }
// sumage(students)

// task21 - Bütün tələbələrin cəmi bal ortalaması nə qədərdir
// let averagePoint = (arr)=>{
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum+=arr[i].avgPoint;
//   }
//   let average = sum/arr.length
//   console.log(average)
// }
// averagePoint(students)


//task22- "book" həvəsi olan tələbələrin siyahısını çap edin;
// let bookfav = (arr) =>{
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr[i].hobbies.length; j++) {
//             if(arr[i].hobbies[j].includes("book")){
//                 console.log(arr[i])
//             }           
//         } 
//     }
// }
// bookfav(students)

//task23-Tələbələrin yaş ortalaması nədir?
// let avreageAge = (arr)=>{
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum+=arr[i].age;
//   }
//   console.log(sum/arr.length);
// }
// avreageAge(students)


//task24-Hər bir tələbə üçün cinsiyət və yaşı göstərən bir obyekt yaradin
// let createArr = (arr)=>{
//     let box = [];
//     for (let i = 0; i < arr.length; i++) {
//       let box1 = {};
//       box1.gender = arr[i].gender;
//       box1.age = arr[i].age;
//       box.push(box1)
//     }
//     console.log(box);
// }
// createArr(students)


//task25 - Bütün tələbələrin ad və soyadlarının uzunluqlarının cəmi hansıdır
// let fullnameSum = (arr) =>{
//     let sum =0
//     for (let i = 0; i < arr.length; i++) {
//         sum+=arr[i].name.length + arr[i].surname.length;
//     }
//     console.log(sum)
// }
// fullnameSum(students)


//task26- Tələbələrin adlarını tərsinə çevirin.
// let reversename =(arr) =>{
//   for (let i = 0; i<arr.length; i++) {
//     let box =""
//     for (let j = arr[i].name.length-1; j >=0; j--) {
//       box +=arr[i].name[j]
//     }
//     arr[i].name=box
//   }
//   console.log(arr)
// }
// reversename(students)

//task27 - "gamig" həvəsi olan tələbələrin array-ini yaradın
// let boxarr =[]
// let gamingfav =(arr) =>{
//   for (let i = 0; i < arr.length; i++) {
//     if(students[i].hobbies.includes("gaming")){
//       boxarr.push(arr[i].name)
//     }
//   }
//   console.log(boxarr)
// }
// gamingfav(students)


//task28- Bütün tələbələrin hobbiləri olan array yaradın

// let hobbyarr =[]
// let allhobbies = (arr) =>{
  
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].hobbies.length; j++) {
//       hobbyarr.push(arr[i].hobbies[j])
//     }
//   }
//   console.log(hobbyarr)
// }
// allhobbies(students)


//-----------------------TASK2-------------------------------
 // task2.1
//
//  let numslice =(Arr,n)=>{
//   return Arr.slice(0,n)
//  }
// console.log(numslice([2, 23, 15, 85],1))
// console.log(numslice([2, 23, 15, 85], 2))
// console.log(numslice([2, 23, 15, 85], 0))
// console.log(numslice([2, 23, 15, 85],4))


// task2.2
// let join =(Arr,n)=>{
//   return Arr.join(n)
// }
// console.log(join([1, 73, 99, 20], "*"))
// console.log(join([1, 73, 99, 20], "/")) 


//task2.11
// const webTechs = [
//   "HTML",
//   "CSS",
//   "JS",
//   "React",
//   "JS",
//   "Redux",
//   "Node",
//   "JS",
//   "MongDB",
// ];
// let arrbox =[]
// let createarr =(array)=>{
//   for (let i = 0; i < array.length; i++) {
//     if(array[i].length>4){
//       arrbox.push(array[i])
//     }
//   }
//   return arrbox
// }
//console.log(createrarr(arrbox))

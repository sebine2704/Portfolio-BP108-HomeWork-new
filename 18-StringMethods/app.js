//Task2
// const number= [2,5,-4,-9,0,18, 30,-40,63];
// let num = [];
// for (let i = 0; i < number.length; i++) {
//     if(number[i]<0){
//         console.log(number[i]);
//         num.push(number[i]);
//     } 
// }
// console.log(num);
// task3

// const number= [2,5,-4,-9,0,18, 30,-40,63];

// let num = [];
// for (let i = 0; i < number.length; i++) {
//     console.log(number[i]**2);
//     num.push(number[i]**2)
    
// }
// console.log(num);

//task4
// const number= [2,5,-4,-9,0,18, 30,-40,63];
// let num1 = [];
// let num2= [];
// for (let i = 0; i < number.length; i++) {
//     if(number[i]<0){     
//         num1.push(number[i]**3);
//     }
//     else if(number[i]>0){     
//         num2.push(number[i]**3)
//     }
// }
// console.log(num1)
// console.log(num2);


//task5
// const number= [2,5,-4,-9,0,18, 30,-40,63];
// let num =[];
// for (let i= number.length; i>0 ;i--) {
//     console.log(number[i]);
//     num.push(number[i]);

// }
// console.log(num);

//task6

// let arr= [2,5,-4,-9,0,18, 30,-40,63];
// let max = arr[0]
// for (let i = 0; i < arr.length; i++) {
//    if(arr[i]>max){
//     max=arr[i] 

//    }
// }
















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
    },
  ];
// task1
// for(let i=0; i<students.length; i++){
//     console.log(students[i]);
// }

//task2
// for(let i=0; i<students.length; i++){
//     console.log(`Ad: ${students[i].name}`);
    
// }


//task3
// for(let i=0; i<students.length; i++){
//     console.log(`Ad: ${students[i].name} ,`, `Soyad: ${students[i].surname}`);
// }



//task4

// for(let i=0; i<students.length; i++){
//     if(students[i].fail ==true){
//         console.log(students[i].name, students[i].surname);

//     }            
// }



//task5
// let max = students[0].hobbies.length;
// let box = students[0].name
// let box2 = students[0].hobbies
// for (let i = 0; i < students.length; i++) {
//   if(students[i].hobbies.length >max){
//     max = students[i].hobbies.length
//     box = students[i].name
//     box2 = students[i].hobbies
//   }
// }
// console.log(box ,box2);

//task6
// let max = students[0].avgPoint;
// let box = students[0].name;
// let box2 = students[0].surname
// for(let i=0; i<students.length; i++){
//     if(students[i].avgPoint>max){
//         max = students[i].avgPoint;
//         box = students[i].name;
//         box2 = students[i].surname;
//     }
// }
// console.log(box , box2);



//task7 - Parolu ən uzun olan tələbənin username və adını çapa verin

// let max = students[0].loginDetail.password.length;
// let box1 = students[0].name;
// let box2 = students[0].surname;
// for (let i = 0; i < students.length; i++) {
//   if(students[i].loginDetail.password.length >max){
//     max = students[i].loginDetail.password.length;
//     box1 = students[i].name;
//     box2 = students[i].surname;
//   }
// }
// console.log(box2 , box1);



//task8- boyfriend-i olan tələbələrin adlarını və username-lərini çapa verin

// for (let i = 0; i < students.length; i++) {
//   if(students[i].boyfriendGirlfriend ==true){
//     console.log("Ad:",students[i].name , ", Username:",students[i].surname)
//   } 
// }




//task9 - yaşı 20 olan tələbələrin adlarını və müəllim adlarını çapa verin

// box = "";
// for (let i = 0; i < students.length; i++) {
//   if(students[i].age==20){
//     for (let j = 0; j < students[i].teacher.length; j++) {
//       box+=students[i].teacher[j].name + " ";
//     }
//     console.log("name:", students[i].name);
//     console.log("teacher:",box)
//   }
// }



//task10- Bütün tələbələrə təqaüdlərinin dollar ilə görünməsini təmin edin

// for (let i = 0; i < students.length; i++) {
//   students[i].salaryUSD=students[i].salaryAZN*1.7
//   console.log(students[i]);
// } 



//task11- Müəllimlərin baş hərflərini böyük hərflə yazın
//!!!!!!!!!!!!!!!!!!!!!!!!!!1
// for (let i = 0; i < students.length; i++) {
//   for (let j = 0; j < students[i].teacher.length; j++) {
//     students[i].teacher[j].name= students[i].teacher[j].name[0].toUpperCase() +students[i].teacher[j].name.slice(1)
// }
// console.log(students[i])
// }


//task12- Şifrəsində rəqəm olan tələbələri tapın
// !!!!!!!!!!!!!!!!!!!!!!!!!!
// for (let i = 0; i < students.length; i++) {
//   let pass = students[i].loginDetail.password;
//   for (let j= 0; j< pass.length; j++) {
//     if(pass[j])
    
//   }

// }

//task13 - Qızların arasında id-si 3 olan müəllimlərin adını deyin
// for (let i = 0; i < students.length; i++) {

//   for (let j = 0; j < students[i].teacher.length; j++) {
//     let id = students[i].teacher[j].id==3
//     if(students[i].gender=="girl" && id)
//     console.log(students[i].teacher[j].name)

// }
// }

//task14- Tələbələrin adlarını və müəllim saylarını çapa verin
// for (let i = 0; i < students.length; i++) {
//   console.log(students[i].name + " " +students[i].teacher.length)
  
// }

//task15- Tələbələrin adlarını username və şifrələrindən ibarət yeni array yaradın [{name:qurban,username:qurban123,password:qqq123}]
// let arr= [];
// for (let i = 0; i < students.length; i++) {
//   arr.push("{Name: "+""+students[i].name,"username: "+"" +students[i].loginDetail.username, "Password: "+ ""+`${students[i].loginDetail.password} }` )
  
// }
// console.log(arr)


//task16 - Müəllimlərin adlarından sonra müəllim sözünü əlavə edin. String metod istifadə edin

// for (let i = 0; i < students.length; i++) {
//   for (let j = 0; j < students[i].teacher.length; j++) {

//     students[i].teacher[j].name = students[i].teacher[j].name.concat(" muellim");
  
// }
// console.log(students[i])
// }


//task17 - Hamının şifrəsinin əvvəlinə 3 ədəd boşluq əlavə edin. String metod istifadə edin
// for (let i = 0; i < students.length; i++) {
//    students[i].loginDetail.password =students[i].loginDetail.password.
//     console.log(students[i])

// }



//task18- Hamının şifrəsinin ilk 4 simvolu görsənsin yerdə qalanlar "*" ilə əvəz olunsun. String metod istifadə edin



//task19- Hamının soyadının uzunluğu adının uzunluğu qədər olsun. String metod istifadə edin
//!!!!!!!!!!!!!!!!!!!!!!!!
// for (let i = 0; i < students.length; i++) {
//   if(students[i].surname.length==students[i].name.length){
//     console.log(students[i])
    
//   }

// }


//task20- Bütün tələbələrin yaşlarının toplamı nə qədərdir
// let sum = 0;
// for (let i = 0; i < students.length; i++) {
//   sum+=students[i].age;
// }
// console.log(sum)



// task21 - Bütün tələbələrin cəmi bal ortalaması nə qədərdir
// let sum = 0;
// for (let i = 0; i < students.length; i++) {
//   sum+=students[i].salaryAZN;
// }
// let ortalama = sum/students.length
// console.log(ortalama)



//task23-Tələbələrin yaş ortalaması nədir?
// let sum = 0;
// for (let i = 0; i < students.length; i++) {
//   sum+=students[i].age;
// }
// let ortalama = sum / students.length;
// console.log(ortalama);


//task24-Hər bir tələbə üçün cinsiyət və yaşı göstərən bir obyekt yaradin

// let box = [];
// for (let i = 0; i < students.length; i++) {
//   let box1 = {}
//   box1.gender=students[i].gender
//   box1.age=students[i].age
//   box.push(box1);

// }
// console.log(box);






//-----------------------TASK2-------------------------------
 // task1
//  let arr = [2, 23, 15, 85]
//  console.log(arr[0]);

//1.2
// let arr = [2, 23, 15, 85];
// console.log(arr.slice(0,2))


//1.3
// let arr = [2, 23, 15, 85];
// console.log(arr.slice(4))


//1.3
// 


// task2

// let arr = [2, 23, 15, 85];
// console.log(arr.join("*"))
// console.log(arr.join("/"))

 


//task5
// let arr = [1, 2, 1, 2, 3];
// console.log(arr.splice(2,4))

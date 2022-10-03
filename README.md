# Writing Module 6

## 1. Module-6 Javascript Scope & Function

<br>

### **Scope**

Scope yang dimaksud adalah sebuah cakupan dalam data variabel. Setiap variabel yang dideklarasikan ada yang dapat diakses dan ada juga yang tidak dapat diakses

Contoh dalam penerapan sehari hari adalah ketika melihat orang berjalan dengan mobil di jalan. Kita dapat melihat pejalan kaki itu seperti apa, dan ada berapa banyak yang sedang berjalan, berdiri, ataupun berlari dapat dihitung. Namun, apabila orang tersebut dalam mobil, kita tidak bisa melihat secara langsung apakah ada orang atau tidak di dalam mobil tersebut. Dari contoh tersebut terdapat variabel orang dan mobil. Orang disini yang biasa kita kenal dengan variabel dengan scope global, sedangkan orang dalam mobil adalah variabel dengan scope local

![Gambar Mobil dan Orang](./1%20Scope%20%26%20Function/Gambar%20Mobil%20dan%20Orang.jpg)

*Gambar 1. Mobil dan Orang*

1. Blocks (Local Scope)

    Menurut saya sendiri, Blocks itu adalah variabel lokal yang dapat disingkat menjadi local scope. Blocks ini biasanya terdapat di antara curly braces `{}` di dalam sebuah function, looping, condition, dan sebagainya

    ![Gambar Blocks](./1%20Scope%20%26%20Function/Gambar%20Blocks%20Scope.png)

    *Gambar 2. Local Scope*

    Apabila variabel tersebut diakses di luar dari function, looping ataupun condition, maka akan terjadi error, yaitu nilai tersebut atau variabel tersebut tidak dikenali seperti gambar 3

    ![Gambar Blocks Failed](./1%20Scope%20%26%20Function/Gambar%20Blocks%20Scope%20Outside.png)

    *Gambar 3. Local Scope Undefined Outside Scope*

2. Global Scope

    Seperti namanya, ini adalah variabel yang dapat diakses dimanapun. Untuk deklarasi variabelnya dapat dituliskan di luar curly braces `{}`. Berbeda dengan sebelumnya, variabel ini dapat digunakan dimanapun termasuk juga didalam blocks

    ![Gambar Global Scope](./1%20Scope%20%26%20Function/Gambar%20Global%20Scope.png)

    *Gambar 4. Global Scope*


<br>

### **Function**

Sebuah program atau kodingan akan terlihat membingunkan apabila kita menaruh semua proses yang terjadi pada satu class atau satu file seperti pada gambar 5

![Gambar Kodingan Jadi Satu](./1%20Scope%20%26%20Function/Gambar%20Kodingan%20Satu%20Plek.png)

*Gambar 5. Potongan Kodingan dalam Satu Class*

Akan jauh lebih baik apabila dijadikan seperti pada gambar 6 dengan membuat sebuah function sesuai dengan fungsinya masing masing

![Gambar Function](./1%20Scope%20%26%20Function/Gambar%20Function.png)

*Gambar 6. Contoh Function*

Selain itu, function juga dapat digunakan kembali apabila dibutuhkan dan juga dapat dengan mudah kita mengatur kodingan yang sudah dituliskan, dibandingkan dengan sebelumnya akan sulit untuk mencari sebuat baris kodingan yang tujuannya adalah membuat looping

Dalam membuat function ada beberapa hal yang perlu dibuat, untuk lebih lengkapnya pada gambar 7

![Gambar Function Structure](./1%20Scope%20%26%20Function/Gambar%20Function%20Identifier.png)

*Gambar 8. Function Structure*

Warna Merah menunjukkan itu adalah sebuah function keyword, dan Warna merah menunjukkan Identifier atau nama yang dapat kita tuliskan untuk function tersebut. Di antara curly braces `{}` merupakan function body atau isi dari function tersebut

Pada gambar 9, menunjukkan cara untuk memanggil function tersebut, lebih lengkapnya dapat dilihat pada gambar

![Gambar Function Call](./1%20Scope%20%26%20Function/Gambar%20Function%20Call.png)

*Gambar 9. Function Call*

Pada warna merah adalah nama function dan warna hijau merupakan sebuah argument atau kita sebut dengan nilai yang diberikan untuk function tersebut. Kita dapat menambah console.log disamping kiri untuk melihat hasil cetakannya di console, ataupun menambah suatu method lain yang diinginkan ke function yang kita panggil

Bila dilihat pada gambar 10, ini merupakan yang dinamakan dengan passing data atau pemindahan suatu nilai

![Gambar Function Parameter](./1%20Scope%20%26%20Function/Gambar%20Function%20Parameter.png)

*Gambar 10. Function Parameter*

Warna merah adalah sebuah parameter yang menerima nilai untuk ke function, bisa berupa nama yang sama dengan nilai yang dikasih, yaitu `angkalooping` ataupun nama lain seperti pada gambar `c`. Untuk argument berwarna hijau, tetap harus sesuai dengan nama variabel aslinya


Selain itu, kita juga dapat membuat sebuah function yang lebih pendek yang bernama "Arrow Function", ini sama seperti function sebelumnya, tetapi lebih singkat dan ringkas

![Gambar Arrow Function](./1%20Scope%20%26%20Function/Gambar%20Function%20Arrow.png)

*Gambar 11. Arrow Function*

Apabila dilihat gambar 11, sangat mudah kan, dan di Arrow Function tidak memerlukan sebuah `return` karena dia secara otomatis mengembalikan nilai

Bila dibandingkan keduanya, tentunya sangat lebih simple menggunakan Arrow Function, tapi balik lagi ke diri kita masing masing dan juga sesuai dengan kebutuhan dari program yang ingin dibuat

<br>

### **Handling Error**

Dalam membuat function, pastinya kita akan menggunakan function tersebut berkali kali apabila sudah membuat program. Nah, terkadang yang namanya program pasti ada kesalahan yang disengaja maupun tidak disengaja dari pengguna ataupun dari sistem. Lalu, bagaimana cara menghadapinya?

![Gambar Sedia Payung](./1%20Scope%20%26%20Function/Gambar%20Sedia%20Payung.jpg)

*Gambar 12. Sedia Payung Sebelum Hujan*

Seperti sebuah pepata "Sedia Payung Sebelum Hujan" di javascript sudah disediakan dengan menggunakan method `try` dan `catch`

![Gambar Handling Error](./1%20Scope%20%26%20Function/Gambar%20Handle%20ERror.png)

*Gambar 13. Example Error*

Pada gambar 13, apabila sebuah sistem tidak bekerja, maka akan mengembalikan error, tetapi disini kita ingin error tersebut menampilkan tulisan lain

Caranya menggunakan yang namanya `try` dan `catch`. Penggunaan simple seperti sebuah condition if... else... dimana try adalah kondisi benar, dan catch adalah kondisi salah. Lebih lengkapnya dapat dilihat pada gambar 14

![Gambar Solution](./1%20Scope%20%26%20Function/Gambar%20Handling%20Error%20Solution.png)

*Gambar 14. Solution Error*

Dengan menggunakan `try` and `catch` akan menjadi lebih mudah dalam track atau melacak sebuah masalah dalam perkodingan kita, dan juga mencegah pengguna dalam melihat isi dari kodingan program kita juga

<br><br>

## 2. Module-6 Javascript Data Type

<br>

### **Data Type**

Tipe data yang dimaksud disini adalah data primitive atau hanya dapat menampung satu isi saja. Seperti contoh pada gambar berikut

![Gambar Tipe Tipe Data](./2%20Data%20Type/Gambar%20Tipe%20Tipe%20Data%20Type.png)

*Gambar 15. Data Primitive*

Disini akan mempelajari mengenai syntax apa saja yang dapat digunakan untuk memodifikasi tipe data primitive

1. String

    Tipe data string sangat banyak digunakan di Javascript, lebih tepatnya hanya ada dua tipe data yang seringkali digunakan, string dan juga number. Pada saat ini akan membahas mengenai string terlebih dahulu

    Cara mendeklarasikan string sangat mudah, kita dapat membuatnya menjadi seperti berikut

    ```
    const string1 = "String dengan tanda petik dua";`

    const string2 = 'String dengan tanda petik satu';

    const string3 = `string dengan backticks`;
    ```

    Ataupun menjadikannya sebuah object

    ```
    const string4 = new String("String dalam Object");

    ```

    Untuk memodifikasi sebuah string ada banyak cara, beberapa yang sering digunakan

    ![Gambar String](./2%20Data%20Type/Gambar%20String.png)

    *Gambar 16. Tipe Data String*

   Penjelasan singkat mengenai gambar 16 merupakan beberapa syntax yang dapat digunakan seperti toLowerCase dimana string akan dibuat kecil semua, dan juga ketika menambahkan sebuah tipe data number pada sebuah string, Javascript akan secara otomatis membuat number tersebut menjadi sebuah string

    String dapat dimodifikasi apapun dalam javascript, karena akan ada beberapa kasus yang lebih kompleks dalam mengubah sebuah string menjadi yang kita inginkan

2. Number 

    Number dalam javascript beragam, terdapat angka desimal ataupun juga dalam bentuk string. Number juga dapat didefinisikan sebagai sebuah nilai boolean. Lebih lengkap pada gambar

    ![Gambar Number](./2%20Data%20Type/Gambar%20Number.png)

    *Gambar 17. Tipe Data Number*

    Singkat saja mengenai tipe data number, dia dapat juga digunakan dalam bentuk lain ataupun sebuah perhitungan. Yang dimaksud bentuk lain adalah sebuah asci code seperti pada pemrograman Java, dan juga sebuah nilai boolean untuk dijadikan sebuah perhitungan


3. Math

    Math adalah sebuah syntax yang disediakan Javascript untuk proses matematika seperti nilai pi ataupun sin cos tan

    ![Gambar Math](./2%20Data%20Type/Gambar%20Math.png)

    *Gambar 18. Math*

    Math sangat berguna apabila kita membutuhkan sesuatu yang berhubungan dengan angka yang kompleks, seperti angka acak ataupun pembulatan

Itulah tipe tipe data primitive, di sisi lain terdapat juga data non primitive seperti array

`Array = [1,2,3]`

Dimana dia dapat menyimpan beberapa number apabila dilihat dari contoh. Nah, singkatnya seperti mengenai contoh array

Ada juga Array of Object yang menggabungkan beberapa number dan string ataupun boolean

```
const Person{
    name: "Erik",
    age: 21,
    isVegan: false
}
```

Itulah contoh dari tipe data non primitive, yang dimana dapat menyimpan beberapa data, tidak hanya satu tetapi lebih



<br><br>

## 2. Module-6 Javascript DOM

<br>

### **DOM**

Document Object Model (DOM) adalah sebuah web API dengan bantuan library untuk memanipulasi sebuah tampilan website melalui Javascript

Disini akan langsung praktik mengenai bagaimana DOM itu bekerja dalam javascript, html, dan juga css

![Gambar Find Element](./3%20DOM/Gambar%20Find%20Element.png)

*Gambar 19. Find Element*

Gambar 19 menunjukkan `getElementByID` dia mengambil atau membaca sebuah ID pada html dengan nama "header", disini dia akan return satu saja karena ID adalah unik. Sedangkan `getElementByClassName` dapat berupa array, karena dia bisa memiliki beberapa class dalam HTML

Ada banyak untuk mendapatkan nilai dari html, seperti `querySelector` dimana dia akan select beberapa tag, ataupun sebuah nama dari html

![Gambar Change Content](./3%20DOM/Gambar%20Change%20content.png)

*Gambar 20. Change Element*

Pada Gambar 20 dapat dilihat ada dua cara. Yang pertama menggunakan `textConcent`, disini dia akan mengganti isi dari tag `<p>` dan hanya mengubah teksnya. Sedangkan yang kedua `innerHTML` akan mengubah juga mulai dari tag, dan juga isinya seperti pada gambar

![Gambar Add content](./3%20DOM/Gambar%20Add%20Content.png)

*Gambar 21. Add Element*

Apabila kita ingin menambah sebuah element baru, kita dapat mengikuti cara dari gambar 21. Pertama tama kita tambahkan dahulu sebuah variabel untuk menampung tag yang ditambah, kemudian kasih juga isi dari tag tersebut. Terakhir, kita perlu cari dulu ID atau posisi mana yang ingin ditambahkan, dan selanjutnya tinggal gunakan `appendChild()` untuk membuat tag tersebut menjadi bisa ditampilkan

![Gambar Event Click](./3%20DOM/Gambar%20Event%20Click.png)

*Gambar 22. Event Click*

Seperti pada gambar 22, kita akan membuat sebuah teks yang dapat muncul seperti sebuah pesan atau pop-up ketika kita klik sebuah tombol. Disini kita akan menggunakan yang namanya Event Listener, Event tersebut akan bekerja ketika kita tambahkan "click" yang artinya setiap button yang diklik akan menjalankan sebuah function disitu. Dan hasilnya seperti yang dapat dilihat pada gambar 22 akan muncul sebuah teks "test" ketika kita ketik pada sebuah input dan mengklik tombol tersebut

![Gambar Styling](./3%20DOM/Gambar%20Styling.png)

*Gambar 23. Styling*

Penerapan pada gambar 23 sangat simple, seperti pada penggunaan CSS. Untuk dalam javascript kita dapat cari dahulu id yang ingin dimodifikasi, kemudian id tersebut kita atur dengan menggunakan syntax `style` dan dilanjutkan dengan syntax yang kita kenal pada CSS. Pada contoh kita mengubah background menjadi warna hitam

Terakhir adalah membuat form/Login

![Gambar Form](./3%20DOM/Gambar%20Form.png)

*Gambar 24. Login Submit*

Pada gambar 24 menggunakan gabungan dan kombinasi dari Javascript yang sudah dipelajari sebelumnya, dengan tambahan `event.preventDefault()` yang memiliki fungsi apabila diback atau undo akan mencegah hal itu terjadi. Kemudian, singkat mengenai login ini akan berhasil apabila yang dimasukkan adalah username "Erik" dan password "123", dan bila dicoba coba salah akan muncul pada console log seperti pada gambar


<br><br>

### **Kesimpulan**

Minggu ini belajar penuh mengenai penggunaan dari Javascript hingga penggunaan DOM. Memanipulasi HTML dan CSS melalui javascript, sangat keren dan menarik karena bagaimana bisa ternyata tanpa perlu HTML dan CSS kita dapat membuat sebuah konten ataupun memodifikasi konten website kita hanya dengan Javascript. Materi yang paling menarik adalah DOM, karena dia ternyata bukan bagian dari Javascript melainkan sebuah web API. Selain itu, DOM memiliki banyak fitur menarik lainnya yang dapat membuat website kita menjadi lebih fungsional seperti dapat membuat login, register, pemesanan, dan lain sebagainya hanya dengan fitur DOM ini




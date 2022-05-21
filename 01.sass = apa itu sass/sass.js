// apa itu sass


/*

nah dimateri kali ini kita akan memulai sebuah seri baru yaitu seri
mengenai sass 

jadi sass ini merupakan sebuah css pre prosessor dimana kita bisa
menuliskan sintax css dengan lebih keren lagi karena memiliki banyak sekali 
fitur

nah buat kalian yang belum tahu apa itu css pre prosessor apa itu sass
dimateri kali ini kita akan bahas dulu mengenai konsep dasar

dan alasan kenapa kita menggunakan css pre prosessor




1. CSS Pre Processor

nah sebelum kita membahas apa itu sass kita akan membahas dulu
apa itu css pre processor karena sass itu merupakan css pre processor

nah biasanya kalo kita bikin css untuk file html terus kita hubungkan
dengan file css dengan menggunakan tag link misalnya dan ini tidak ada 
masalah

nah sekarang dengan menggunakan pre processor ada satu langkah tambahan
jadi yang akan terhubung kedalam file html itu tetap file css

tapi sekarang kita tidak lagi mengedit file cssnya 
jadi nanti akan kita edit adalah sebuah file yang nantinya akan di 
compile menggunakan sebuah compiler khusus sehingga nanti file yang kita 
tuliskan itu berubah menjadi file css

nah file css ini lah yang nantiya akan kita hubungkan kedalam htmlnya
file yang akan kita buat dan kita edit ini adalah file sass 

tapi nanti kita lihat dulu sebelum masuk kesassnya 
ada gak pre processor yang lainnya selain sass 

nah jadi sekarang kita fokusnya ke file yang akan dicompilenya
nanti kita sama sekali tidak akan menyentuh file cssnya

nah kenapa disebut pre processor?
karena file yang akan kita buat dan kita edit ini akan dicompile 
sebelum di prosess menjadi file css

jadi itu lah kenapa disebut preprocessor
jadi kita mengerjakannya sebelum menjadi file css 
dan kemudian dicompile menjadi file css

nah kenapa nanti ada compilernya 
kita lihat nanti deh



nah sekarang pertanyaannya kenapa kita pakai css pre processor?


nah saya akan akan kasih gambaran dulu bagaimana penggunaan dari 
css pre processor ini ya

jadi kalian bisa menulis seperti ini

$myFont : Helvetivca,sans-serif     // ini adalah variable
$primary-color : #333               // ini adalah variable

nav 
    font-family : $myFont
    color : $primary-color
    ul
        margin : 0
        padding : 0
        list-style : 0


    li
        display : inline-block


jadi didalam cssnya nanti kita punya variable
terus kita bisa menuliskan sintaxnya secara bersarang

nah nanti kita tulisnya seperti ini 
sehinggan nanti setelah dicompile

maka hasilnya akan menjadi seperti ini

nav{
    font-family : Helvetivca,sans-serif
    color : #333 
}

nav ul{
    margin : 0
    padding : 0
    list-style : 0
}

nav li{
    display : inline-block
}



nah jadi kita menuliskan sebuah script yang bukan css
tapi nantinya akan diterjemahkan menjadi file css

jadi ini contoh kalo kita pakai css pre processor
dan yang akan dibaca oleh html kita tetap yang file cssnya 

kita akan lebih detil untuk bagaimana cara menuliskan sintaxnya nanti
dimateri materi berikutnya





2.kenapa ada css pre processor?


jadi css pre processor ini dulu muncul karena para developer itu merasa
ada kekurangan pada css

karena css itu tidak seperti bahasa pemrograman dia memiliki kekurangan
nah kekurangannya 

- tidak memiliki variable
    nah dulu css itu tidak memiliki variable
    tapi sekarang css sudah memiliki variable

- tidak ada function
- tidak ada modularisasi
    jadi kita tidak bisa memisah misahkan code css
    sebagai sebuah module

- tidak bisa melakukan operasi matematik dan logika pemrograman
- banyak duplikasi code
    dan terakhir banyak memiliki duplikasi code



solusi dari css pre processor

- variable
    jadi kita bisa bikin variable
- mixin
    nah mixin ini untuk membuat serangkain style yang bisa kita
    pakai berulang ulang 

    jadi kalian cukup bikin sekali kyk function lah
    buat sekali dapat dipanggil lebih dari satu kali

- import uses
    nah ini untuk membuat file css kita jadi modular
    jadi gampang dikelola 

    kalo misalkan kalian hanya punya satu file css tidak masalah ya 
    kyknya tidak perlu pakai import dan use ini 

    tapi kalo misalkan kalian mengerjakan webnya itu sudah cukup besar
    file cssnya banyak kalian bisa bikin agar stylenya terpisah

    misalkan ini style khusus untuk typograpy
    ini style khusus untuk layout

    ini menggunakan import dan use

- operator dan build in function
    nah kita juga bisa menggunakan operator 
    dan juga ada build in function

    misalnya kalian mau mengasih sebuah waranya untuk tombol
    nah begitu dihover tombolnya bisaanya ganti warna

    dengan menggunakan build in function kita bisa bikin
    tombolnya itu bisa dibikin cerah 20% tolong buat lebih gelap

- nested css

    nah kita bisa buat cssnya bersarang 
    jadi kita lebih mudah untuk mengelompokkan element mana gitu



nah nanti kalian mungkin akan melihat beberapa dari 
solusi ini saat ini karena kemajuan teknologi css yang terbaru

sudah bisa ditangani oleh css tanpa menggunakan css pre processor
tapi kalian pahami dulu

dulu itu css tidak memiliki fitur tersebut makanya kita
pakai css pre processor




3. jenis css pre processor

nah sebetulnya css pre processor itu banyak
yang paling popular itu ada tiga 

ada sass, less, dan stylus
tapi untuk seri materi kita kali ini kita akan menggunakan 
yang sass

nah untuk lebih detilnya kita lihat aja documentasinya 
https://sass-lang.com/


nah kita juga bisa menulis css didalam sass ini 
nanti sassnya akan menterjemahkan ke cssnya

sass itu singkatan dari Syntactically Awesome Style Sheets
kalian bisa lihat disitu cara installnya bagaimana
dan documentasinya seperti apa





4. alasan menggunakan sass

- mempermudah penulisan
- mempermudah pengelolaan 
- memiliki banyak fungsi build in
- kita dapat membuat fungsi sendiri atau user defined function dengan menggunakan mixin
- kita dapat memodifikasi css framework
    kalo misalkan kalian sudah paham sass kalian dapat
    memodifikasi css frameworknya 
    contoh kita bisa memodifikasi bootstrap atau materialize
    karena dua itu dibangun menggunakan sass

- banyak perusahaan menggunakan sass


nah nanti ketika kalian belajar sass kalian akan dihadapkan oleh 
dua pilihan ada yang namanya sass dan scss

nah jadi apa itu sass dan apa itu scss?
nah ini adalah pilihan yang dikasih oleh sassnya 

jadi kita bisa menuliskan sintax cssnya dalam bentuk sass
seperti ini

$myFont : Helvetivca,sans-serif     // ini adalah variable
$primary-color : #333               // ini adalah variable

nav 
    font-family : $myFont
    color : $primary-color
    ul
        margin : 0
        padding : 0
        list-style : 0


    li
        display : inline-block

atau dalam bentuk scss seperti ini

$myFont : Helvetivca,sans-serif     // ini adalah variable
$primary-color : #333               // ini adalah variable

nav{
    font-family : $myFont;
    color : $primary-color;
    ul{
        margin : 0;
        padding : 0;
        list-style : 0;

    }
    li{
        display : inline-block;
    }
}


untuk nanti kita akan pakai yang scss karena cukup nyaman dengan
adanya kurung kurawal dan titik koma

dan jangan khawatir kalian mau pilih yang manapun tidak masalah
karena nanti juga akan dicompile menjadi file css

yang scss nanti kalian bisa tulis .scss difilenya 





5. cara install sass

kita harus instalasi compilernya dulu ya
ada tiga cara untuk intall compilernya 


- aplikasi
    CodeKit (Paid) Mac
    Ghostlab (Paid) Mac Windows
    Hammer (Paid) Mac
    LiveReload (Paid, Open Source) Mac Windows
    Prepros (Paid) Mac Windows Linux
    Scout-App (Free, Open Source) Windows Linux Mac

- menggunakan command line
    kalian bisa install menggunakan npm
    npm install -g sass

    tenang saja untuk penginstalannya ini secara global
    bukan local

    nah untuk menjalankan compilernya kalian tulis
    sass source/stylesheets/index.scss build/stylesheets/index.css

    jadi ini bacanya sass tolong ubah file index.scss menjadi file index.css

- menggunakan vs code extention
    nah kita akan menggunakan vv code extention
    yaitu live sass compiler

    















*/  
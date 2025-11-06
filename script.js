const attractions = [
  {id:1,name:"Gunung Tangkuban Perahu",area:"Lembang",time:"45–60 menit",price:"Rp 20.000–30.000",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Tangkuban_Prahu.jpg/800px-Tangkuban_Prahu.jpg",desc:"Gunung berapi dengan kawah luas dan pemandangan pegunungan."},
  {id:2,name:"Kawah Putih",area:"Ciwidey",time:"1.5–2 jam",price:"Rp 26.000–63.000",img:"https://asset.kompas.com/crops/RBNlCuUjVRx2KGyVp5vwX4bv1ro%3D/0x0%3A1003x669/1200x800/data/photo/2021/09/26/615070d94add1.jpg",desc:"Danau kawah nan mistis dengan panorama photogenic."},
  {id:3,name:"Taman Hutan Raya Djuanda",area:"Kota Bandung",time:"30–45 menit",price:"Rp 11.000",img:"https://upload.wikimedia.org/wikipedia/commons/0/07/Taman_Hutan_Raya_IR_Djuanda.jpg",desc:"Hutan kota, spot sunrise Tebing Keraton, dan gua Belanda."},
  {id:4,name:"Orchid Forest Cikole",area:"Lembang",time:"45–60 menit",price:"Rp 40.000",img:"https://mymodernmet.com/wp/wp-content/uploads/2020/10/Cikole-Orchid-Forest-Indonesian-Forest-Bridge-3.png",desc:"Kebun anggrek di tengah hutan pinus dengan spot foto menarik."},
  {id:5,name:"Floating Market Lembang",area:"Lembang",time:"45–60 menit",price:"Rp 15.000–40.000",img:"https://awsimages.detik.net.id/community/media/visual/2022/02/09/floating-market-lembang-bisa-menjadi-salah-satu-pilihan-tempat-makan-anda-bersama-keluarga-di-lembang-bandung-barat_169.jpeg?w=1200",desc:"Pasar kuliner di atas perahu, cocok untuk keluarga."},
  {id:6,name:"Dusun Bambu",area:"Lembang",time:"60–90 menit",price:"Rp 30.000–70.000",img:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/61/c5/5e/dusun-bambu.jpg",desc:"Leisure park dengan restoran dan area keluarga."},
  {id:7,name:"Kiara Artha Park",area:"Kota Bandung",time:"10–20 menit",price:"Gratis / murah",img:"https://travelspromo.com/wp-content/uploads/2020/11/dancing-fountain.jpg",desc:"Taman kota modern dengan air mancur menari."},
  {id:8,name:"Curug Cimahi",area:"Cimahi",time:"45–60 menit",price:"Rp 20.000",img:"https://pulasinn.wordpress.com/wp-content/uploads/2015/01/curug-pelangi.jpg",desc:"Air terjun indah diterangi lampu warna-warni malam hari."},
  {id:9,name:"Saung Angklung Udjo",area:"Kota Bandung",time:"20–30 menit",price:"Tergantung sesi pertunjukan",img:"https://upload.wikimedia.org/wikipedia/commons/e/e0/Saung_Angklung_Udjo.JPG",desc:"Pusat budaya Sunda dengan pertunjukan angklung."},
  {id:10,name:"Museum Sri Baduga",area:"Kota Bandung",time:"10–20 menit",price:"Terjangkau",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Sri_Baduga_Museum.JPG/800px-Sri_Baduga_Museum.JPG",desc:"Museum provinsi menampilkan budaya Jawa Barat."},
  {id:11,name:"Rumah Mode",area:"Kota Bandung",time:"10–30 menit",price:"Belanja",img:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/02/9c/a6/photo3jpg.jpg",desc:"Factory outlet populer untuk belanja fashion."},
  {id:12,name:"Grafika Cikole",area:"Lembang",time:"45–60 menit",price:"Rp 20.000–50.000",img:"https://www.grafikacikole.com/wp-content/uploads/27c440eb-5ee9-4d8f-92cf-44520198ea2b-jpg.webp",desc:"Resort hutan pinus dengan wahana outdoor."},
  {id:13,name:"Ranca Upas",area:"Ciwidey",time:"90–120 menit",price:"Rp 10.000+",img:"https://www.rancaupas.id/wp-content/uploads/2023/07/Ranca-Upas-Camping-Ground-Ciwidey-Bandung.jpg",desc:"Campsite dan area rusa keluarga."},
  {id:14,name:"Situ Patenggang",area:"Ciwidey",time:"90–120 menit",price:"Terjangkau",img:"https://www.mybandung.id/wp-content/uploads/2023/09/situ-patenggang-bandung-780x405.jpg",desc:"Danau tenang dengan perahu dan pemandangan kebun teh."},
  {id:15,name:"Farmhouse Lembang",area:"Lembang",time:"45–60 menit",price:"Rp 30.000–40.000",img:"https://storage.googleapis.com/finansialku_media/wordpress_media/2017/12/Rumah-Hobbit-Bandung-01-Finansialku.jpg",desc:"Tema Eropa mini dan rumah hobbit."},
  {id:16,name:"The Great Asia Africa",area:"Lembang",time:"45–60 menit",price:"Rp 20.000+",img:"https://asset.kompas.com/crops/_Z7h_Pn_ir13rTKm9DWFyrN7mu4%3D/0x0%3A739x493/750x500/data/photo/2020/01/19/5e24200b82007.jpg",desc:"Miniatur negara Asia dan Afrika."},
  {id:17,name:"Lembang Park & Zoo",area:"Lembang",time:"45–60 menit",price:"Rp 50.000–70.000",img:"https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_863/activities/yvp86bd9vussihlszfxw/TiketLembangParkZoodiBandung.jpg",desc:"Kebun binatang dan wahana edukatif keluarga."},
  {id:18,name:"Dago Dream Park",area:"Kota Bandung",time:"30–45 menit",price:"Rp 20.000–40.000",img:"https://phinemo.com/wp-content/uploads/2018/06/34492303_257065098401324_5054031022434287616_n.jpg",desc:"Taman hiburan dengan spot foto."},
  {id:19,name:"Teras Cikapundung",area:"Kota Bandung",time:"15–25 menit",price:"Gratis",img:"https://www.kelasgarasi.com/wp-content/uploads/2024/01/teras-cikapundung-bbws-kelas-garasi-1.jpg",desc:"Taman terbuka di tepi sungai yang indah."},
  {id:20,name:"Kampung Gajah Wonderland",area:"Lembang",time:"45–60 menit",price:"Rp 30.000+",img:"https://cdn1-production-images-kly.akamaized.net/mqcL915CXnoWWGL2QNV0qQ2dAo0%3D/1280x720/smart/filters:quality(75):strip_icc()/kly-media-production/medias/1112655/original/065596700_1452862981-bandung4.jpg",desc:"Taman bermain dan wisata keluarga."}
];

const cardsEl = document.getElementById("cards");

function renderCards(list){
  cardsEl.innerHTML = "";
  list.forEach(a=>{
    const card = document.createElement("article");
    card.className="card";
    card.innerHTML=`
      <img src="${a.img}" alt="${a.name}" onclick="openDetailPage(${a.id})">
      <div class="card-body">
        <h4>${a.name}</h4>
        <p>${a.desc}</p>
        <div class="meta">
          <span>${a.area}</span>
          <span>${a.price}</span>
        </div>
      </div>`;
    cardsEl.appendChild(card);
  });
}

function openDetailPage(id){
  window.location.href = `detail.html?id=${id}`;
}

renderCards(attractions);

localStorage.setItem('attractionsData', JSON.stringify(attractions));

window.openDetail = openDetail;


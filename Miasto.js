import { GLTFLoader } from "./js/GLTFLoader.js";

//Tekstury
const RoadTexture = "textures/b7978e35febb5de2d9d4c8bddae6b59c--seamless-textures-vray.png";
const BuildingTexture ="textures/129566807-windows-of-a-building-texture-glass-blue-square-windows-of-facade-modern-city-business-building-skys.jpg";
const BuildingTexture2 ="textures/modern-building-facade-texture-free-thumb35.jpg"
const BuildingTexture3 ="textures/0edbe0c0b8012495fb4ff43688b1af62.jpg"
const BuildingTexture4 ="textures/1e61938fa51f14518947d66db7fd6e8f.jpg"

// Utworzenie sceny
const scene = new THREE.Scene();

// Utworzenie renderera
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Utworzenie kamery
const camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 0.1, 2000 );
scene.add( camera );
camera.position.set(-23, 18, 14);
camera.lookAt(new THREE.Vector3(0, 0, 0));

const loader = new GLTFLoader();
const textureLoader = new THREE.TextureLoader();

// Obiekty
loader.load("wszystkie/Stadion/scene.gltf", function (gltf) {
  const auto = gltf.scene;
  auto.position.set(6.8, -8.05, -0.11)
  auto.rotation.x=1.58;
  auto.rotation.y=3.16;
  gltf.scene.scale.set(3*gltf.scene.scale.x, 3*gltf.scene.scale.y, 3*gltf.scene.scale.z)
  road.add(gltf.scene);
});
//Samochody
loader.load("wszystkie/Auto1/scene.gltf", function (gltf) {
  const auto = gltf.scene;
  auto.position.set(2.5, -9, 0.3)
  auto.rotation.x=1.58;
  gltf.scene.scale.set(0.1*gltf.scene.scale.x, 0.1*gltf.scene.scale.y, 0.1*gltf.scene.scale.z)
  road.add(gltf.scene);
});

loader.load("wszystkie/Auto3/scene.gltf", function (gltf) {
  const auto = gltf.scene;
  auto.position.set(-7.5, -3.5, 0.3)
  auto.rotation.x=1.58;
  auto.rotation.y=1.58;
  gltf.scene.scale.set(0.006*gltf.scene.scale.x, 0.006*gltf.scene.scale.y, 0.006*gltf.scene.scale.z)
  road.add(gltf.scene);
});

loader.load("wszystkie/Auto4/scene.gltf", function (gltf) {
  const buidling = gltf.scene;
  buidling.position.set(9.8, 8, 0.4)
  buidling.rotation.x=1.58;
  buidling.rotation.y=1.58;
  gltf.scene.scale.set(0.007*gltf.scene.scale.x, 0.007*gltf.scene.scale.y, 0.007*gltf.scene.scale.z)
  road.add(gltf.scene);
});

loader.load("wszystkie/Auto5/scene.gltf", function (gltf) {
  const auto = gltf.scene;
  auto.position.set(-2.5, 4.2, 0.3)
  auto.rotation.x=1.58;
  gltf.scene.scale.set(0.01*gltf.scene.scale.x, 0.01*gltf.scene.scale.y, 0.01*gltf.scene.scale.z)
  road.add(gltf.scene);
});

loader.load("wszystkie/Auto6/scene.gltf", function (gltf) {
  const auto = gltf.scene;
  auto.position.set(-11.4, -7.6, 0.3)
  auto.rotation.x=1.58;
  auto.rotation.y=3.16;
  gltf.scene.scale.set(0.003*gltf.scene.scale.x, 0.003*gltf.scene.scale.y, 0.003*gltf.scene.scale.z)
  road.add(gltf.scene);
});

loader.load("wszystkie/Auto8/scene.gltf", function (gltf) {
  const auto = gltf.scene;
  auto.position.set(-11.5, 6.6, 0.9)
  auto.rotation.x=1.58;
  gltf.scene.scale.set(0.5*gltf.scene.scale.x, 0.5*gltf.scene.scale.y, 0.5*gltf.scene.scale.z)
  road.add(gltf.scene);
});

loader.load("wszystkie/Auto9/scene.gltf", function (gltf) {
  const auto = gltf.scene;
  auto.position.set(6.5, -4.5, 0.3)
  auto.rotation.x=1.58;
  auto.rotation.y=1.58;
  gltf.scene.scale.set(0.003*gltf.scene.scale.x, 0.003*gltf.scene.scale.y, 0.003*gltf.scene.scale.z)
  road.add(gltf.scene);
});

loader.load("wszystkie/Grass/scene.gltf", function (gltf) {
  const auto = gltf.scene;
  auto.position.set(0, 0, 0.03)
  auto.rotation.x=1.57;
  gltf.scene.scale.set(7.4*gltf.scene.scale.x, 6.5*gltf.scene.scale.y, 7.4*gltf.scene.scale.z)
  road.add(gltf.scene);
});

loader.load("wszystkie/Płot/scene.gltf", function (gltf) {
  const auto = gltf.scene;
  auto.position.set(-7.6, 2.2, 0.03)
  auto.rotation.x=1.57;
  gltf.scene.scale.set(0.8*gltf.scene.scale.x, 0.8*gltf.scene.scale.y, 0.8*gltf.scene.scale.z)
  road.add(gltf.scene);
});

loader.load("wszystkie/Płot/scene.gltf", function (gltf) {
  const auto = gltf.scene;
  auto.position.set(-8.6, 2.2, 0.03)
  auto.rotation.x=1.57;
  gltf.scene.scale.set(0.8*gltf.scene.scale.x, 0.8*gltf.scene.scale.y, 0.8*gltf.scene.scale.z)
  road.add(gltf.scene);
});

loader.load("wszystkie/Płot/scene.gltf", function (gltf) {
  const auto = gltf.scene;
  auto.position.set(-9.6, 2.2, 0.03)
  auto.rotation.x=1.57;
// auto.rotation.y=0.1;
  gltf.scene.scale.set(0.8*gltf.scene.scale.x, 0.8*gltf.scene.scale.y, 0.8*gltf.scene.scale.z)
  road.add(gltf.scene);
});

//podloga
const roadGeometry = new THREE.PlaneGeometry( 26, 26 );
const roadMaterial = new THREE.MeshLambertMaterial( { color: 0x00FF00 } );
const road = new THREE.Mesh( roadGeometry, roadMaterial );
road.rotation.x = -Math.PI / 2;
road.position.set(0.1, -0.55, 0.5);
scene.add( road );

////////////////////////////////////////////////////////     DROGI       /////////////////////////////////////////////////////////
//poziome
const roadGeo = new THREE.BoxGeometry( 26, 0.01, 1.8 );
const roadMat = new THREE.MeshLambertMaterial( { map: textureLoader.load(RoadTexture)} );
const cube = new THREE.Mesh( roadGeo, roadMat );
cube.position.set(0, -0.3, -11);
scene.add( cube );

const cube2 = new THREE.Mesh( roadGeo, roadMat );
cube2.position.set(0, -0.2, -3.2);
scene.add( cube2 );

const cube3 = new THREE.Mesh( roadGeo, roadMat );
cube3.position.set(0, -0.3, 4.6);
scene.add( cube3 );

const cube5 = new THREE.Mesh( roadGeo, roadMat );
cube5.position.set(0, -0.3, 12.4);
scene.add( cube5 );
//pionowe
const cube6 = new THREE.Mesh( roadGeo, roadMat );
cube6.position.set(-5.2, -0.3, 0.55);
cube6.rotation.y=1.58;
scene.add( cube6 );

const cube7 = new THREE.Mesh( roadGeo, roadMat );
cube7.position.set(3, -0.3, 0.55);
cube7.rotation.y=1.58;
scene.add( cube7 );

const roadGeo3 = new THREE.BoxGeometry( 26, 0.01, 1.8 );
const roadMat3 = new THREE.MeshLambertMaterial( {map: textureLoader.load(RoadTexture)} );
const cube8 = new THREE.Mesh( roadGeo3, roadMat3 );
cube8.position.set(10.64, -0.3, 0.55);
cube8.rotation.y=1.58;
scene.add( cube8 );

const roadGeo2 = new THREE.BoxGeometry( 26, 0.01, 1.8 );
const roadMat2 = new THREE.MeshLambertMaterial( {map: textureLoader.load(RoadTexture)} );
const cube9 = new THREE.Mesh( roadGeo2, roadMat2 );
cube9.position.set(-11.8, -0.3, 0.55);
cube9.rotation.y=1.58;
scene.add( cube9 );

////////////////////////////////////////////////////////      PASY       /////////////////////////////////////////////////////////

const pasy1Geo = new THREE.BoxGeometry( 0.3, 0.03, 0.1 );
const pasy1Mat = new THREE.MeshLambertMaterial({ color: 0xffffff });
const pasy1 = new THREE.Mesh( pasy1Geo, pasy1Mat );
pasy1.position.set(-10.75, -0.2, -3.9);
scene.add( pasy1 );

const pasy2 = new THREE.Mesh( pasy1Geo, pasy1Mat );
pasy2.position.set(-10.75, -0.2, -3.7);
scene.add( pasy2 );

const pasy3= new THREE.Mesh( pasy1Geo, pasy1Mat );
pasy3.position.set(-10.75, -0.2, -3.5);
scene.add( pasy3 );

const pasy4= new THREE.Mesh( pasy1Geo, pasy1Mat );
pasy4.position.set(-10.75, -0.2, -3.3);
scene.add( pasy4 );

const pasy5= new THREE.Mesh( pasy1Geo, pasy1Mat );
pasy5.position.set(-10.75, -0.2, -3.1);
scene.add( pasy5 );

const pasy6= new THREE.Mesh( pasy1Geo, pasy1Mat );
pasy6.position.set(-10.75, -0.2, -2.9);
scene.add( pasy6 );

const pasy7= new THREE.Mesh( pasy1Geo, pasy1Mat );
pasy7.position.set(-10.75, -0.2, -2.7);
scene.add( pasy7 );

const pasy8= new THREE.Mesh( pasy1Geo, pasy1Mat );
pasy8.position.set(-10.75, -0.2, -2.5);
scene.add( pasy8 );

var grupa = new THREE.Group();
grupa.add(pasy1);
grupa.add(pasy2);
grupa.add(pasy3);
grupa.add(pasy4);
grupa.add(pasy5);
grupa.add(pasy6);
grupa.add(pasy7);
grupa.add(pasy8);
scene.add(grupa);

var kopia_grupa = grupa.clone();
kopia_grupa.position.set(4.3, 0.0, 7.85);
scene.add(kopia_grupa);

var kopia_grupa2 = grupa.clone();
kopia_grupa2.position.set(6.55, 0, 7.85);
scene.add(kopia_grupa2);

var kopia_grupa3 = grupa.clone();
kopia_grupa3.position.set(12.55, 0.0, 7.85);
scene.add(kopia_grupa3);

var kopia_grupa4 = grupa.clone();
kopia_grupa4.position.set(14.8, 0.0, 7.85);
scene.add(kopia_grupa4);

var kopia_grupa5 = grupa.clone();
kopia_grupa5.position.set(6.1, 0.0, -5.1);
kopia_grupa5.rotation.y=1.58;
scene.add(kopia_grupa5);

var kopia_grupa6 = kopia_grupa5.clone();
kopia_grupa6.position.set(6.3, 0.0, -7.2);
kopia_grupa6.rotation.y=1.58;
scene.add(kopia_grupa6);

var grupa3 = new THREE.Group();
grupa3.add(kopia_grupa5);
grupa3.add(kopia_grupa6);
scene.add(grupa3);

var kopia_grupa7 = grupa3.clone();
kopia_grupa7.position.set(7.7, 0, 0);
scene.add(kopia_grupa7);

var kopia_grupa8 = grupa3.clone();
kopia_grupa8.position.set(-8.2, 0, 0);
scene.add(kopia_grupa8);

var kopia_grupa9 = kopia_grupa5.clone();
kopia_grupa9.position.set(-1.9, 0.0, 0.63);
kopia_grupa9.rotation.y=1.58;
scene.add(kopia_grupa9);

var kopia_grupa10 = kopia_grupa9.clone();
kopia_grupa10.position.set(-2.2, -0.06, -15);
kopia_grupa10.rotation.y=1.58;
scene.add(kopia_grupa10);
////////////////////////////////////////////////////////     BUDYNKI     /////////////////////////////////////////////////////////

//blok 1
const buildingGeometry = new THREE.BoxGeometry( 1.6, 3, 2.6 );
const buildingMaterial = new THREE.MeshLambertMaterial( { map: textureLoader.load(BuildingTexture2) } );
const building1 = new THREE.Mesh( buildingGeometry, buildingMaterial );
building1.position.set(-8.5, 1, -7);
scene.add( building1 );
//fundament 1
const FunGeo = new THREE.BoxGeometry( 1.9, 0.2, 2.8 );
const FunMat = new THREE.MeshLambertMaterial( { color: 0xffffff } );
const Fun1 = new THREE.Mesh( FunGeo, FunMat );
Fun1.position.set(-8.55, -0.5, -7);
scene.add( Fun1 );
//dach 1
const DachGeo = new THREE.BoxGeometry( 1.6, 0.1, 2.6 );
const DachMat = new THREE.MeshLambertMaterial( { color: 0xC0C0C0 } );
const Dach1 = new THREE.Mesh( DachGeo, DachMat );
Dach1.position.set(-8.5, 2.5, -7);
scene.add( Dach1 );
//krzaki 1
const KrzakGeo = new THREE.SphereGeometry( 0.15, 32, 16 );
const KrzakMat = new THREE.MeshLambertMaterial( { color: 0x006400 } );
const Krzak = new THREE.Mesh( KrzakGeo, KrzakMat );
Krzak.position.set(-10.24, -0.33, -8.26);
scene.add( Krzak );

const KrzakGeo2 = new THREE.SphereGeometry( 0.15, 32, 16 );
const KrzakMat2 = new THREE.MeshLambertMaterial( { color: 0x006400 } );
const Krzak2 = new THREE.Mesh( KrzakGeo2, KrzakMat2 );
Krzak2.position.set(-10.24, -0.33, -8.56);
scene.add( Krzak2 );

const KrzakGeo3 = new THREE.SphereGeometry( 0.15, 32, 16 );
const KrzakMat3 = new THREE.MeshLambertMaterial( { color: 0x006400 } );
const Krzak3 = new THREE.Mesh( KrzakGeo3, KrzakMat3 );
Krzak3.position.set(-10.24, -0.33, -8.86);
scene.add( Krzak3 );

const KrzakGeo4 = new THREE.SphereGeometry( 0.15, 32, 16 );
const KrzakMat4 = new THREE.MeshLambertMaterial( { color: 0x006400 } );
const Krzak4 = new THREE.Mesh( KrzakGeo4, KrzakMat4 );
Krzak4.position.set(-10.24, -0.33, -9.16);
scene.add( Krzak4 );

const KrzakGeo5 = new THREE.SphereGeometry( 0.15, 32, 16 );
const KrzakMat5 = new THREE.MeshLambertMaterial( { color: 0x006400 } );
const Krzak5 = new THREE.Mesh( KrzakGeo5, KrzakMat5 );
Krzak5.position.set(-10.24, -0.33, -9.46);
scene.add( Krzak5 );

var group_Krzaki = new THREE.Group();
group_Krzaki.add(Krzak);
group_Krzaki.add(Krzak2);
group_Krzaki.add(Krzak3);
group_Krzaki.add(Krzak4);
group_Krzaki.add(Krzak5);
scene.add(group_Krzaki);

var kopia_group_Krzaki = group_Krzaki.clone();
kopia_group_Krzaki.position.z=3.45;
scene.add(kopia_group_Krzaki);

var kopia_group_Krzaki2 = group_Krzaki.clone();
kopia_group_Krzaki2.position.z=-15.2;
kopia_group_Krzaki2.position.x=-0.7;
kopia_group_Krzaki2.rotation.y=1.59;
scene.add(kopia_group_Krzaki2);

var kopia_group_Krzaki3 = group_Krzaki.clone();
kopia_group_Krzaki3.position.z=-15.2;
kopia_group_Krzaki3.position.x=0.81;
kopia_group_Krzaki3.rotation.y=1.59;
scene.add(kopia_group_Krzaki3);

var group_ObaKrzaki2 = new THREE.Group();
group_ObaKrzaki2.add(kopia_group_Krzaki2);
group_ObaKrzaki2.add(kopia_group_Krzaki3);
scene.add(group_ObaKrzaki2);

var kopia_group_ObaKrzaki2 = group_ObaKrzaki2.clone();
kopia_group_ObaKrzaki2.position.z=-4.66;
scene.add(kopia_group_ObaKrzaki2);

var kopia_group_ObaKrzaki3 = group_ObaKrzaki2.clone();
kopia_group_ObaKrzaki3.position.z=-14.9;
kopia_group_ObaKrzaki3.position.x=-2.3;
kopia_group_ObaKrzaki3.rotation.y=1.59;
scene.add(kopia_group_ObaKrzaki3);

var kopia_group_ObaKrzaki4 = group_ObaKrzaki2.clone();
kopia_group_ObaKrzaki4.position.z=-16.8;
kopia_group_ObaKrzaki4.position.x=-2.3;
kopia_group_ObaKrzaki4.rotation.y=1.59;
scene.add(kopia_group_ObaKrzaki4);

var group7 = new THREE.Group();
group7.add(kopia_group_ObaKrzaki3);
group7.add(kopia_group_ObaKrzaki4);
scene.add(group7);
//Drzewa 1
const bark_geometry = new THREE.CylinderGeometry( 0.05, 0.05, 1,7 );
const bark_material = new THREE.MeshLambertMaterial( { color: 0x613B16 } );
const bark = new THREE.Mesh( bark_geometry, bark_material );
bark.position.set(-9.8, 0, -9);
scene.add( bark );
const leaves_geometry = new THREE.DodecahedronGeometry( 0.4, 0 );
const leaves_material = new THREE.MeshLambertMaterial( {color: 0x006400} );
const leaves = new THREE.Mesh( leaves_geometry, leaves_material );
leaves.position.set(-9.8, 0.5, -9);
scene.add( leaves );

var Group12 = new THREE.Group();
Group12.add(bark);
Group12.add(leaves);
scene.add(Group12);

///////////////////////////////////////////////////////////////////////////////////

//blok 2
const building2 = new THREE.Mesh( buildingGeometry, buildingMaterial );
building2.position.set(-0.5, 1, -7);
scene.add( building2 );
//fundament 2
var Fun2 = Fun1.clone();
Fun2.position.set(-0.55, -0.5, -7);
scene.add(Fun2);
//dach 2
var Dach2 = Dach1.clone();
Dach2.position.set(-0.5, 2.5, -7);
scene.add(Dach2);
//krzaki 2
var group_ObaKrzaki = new THREE.Group();
group_ObaKrzaki.add(group_Krzaki);
group_ObaKrzaki.add(kopia_group_Krzaki);
scene.add(group_ObaKrzaki);

var kopia_group_ObaKrzaki = group_ObaKrzaki.clone();
kopia_group_ObaKrzaki.position.x=6.67;
scene.add(kopia_group_ObaKrzaki);

var kopia_group_ObaKrzaki5 = group7.clone();
kopia_group_ObaKrzaki5.position.x=8;
scene.add(kopia_group_ObaKrzaki5);

var kopia_group_ObaKrzaki9 = group7.clone();
kopia_group_ObaKrzaki9.position.x=5.8;
kopia_group_ObaKrzaki9.position.z=-16.4;
kopia_group_ObaKrzaki9.rotation.y=1.58;
scene.add(kopia_group_ObaKrzaki9);

var kopia_group_ObaKrzaki10 = group7.clone();
kopia_group_ObaKrzaki10.position.x=5.8;
kopia_group_ObaKrzaki10.position.z=-11.8;
kopia_group_ObaKrzaki10.rotation.y=1.58;
scene.add(kopia_group_ObaKrzaki10);
//chodnik
loader.load("wszystkie/Sidewalk/scene.gltf", function (gltf) {
  const auto = gltf.scene;
  auto.position.set(-3, 7.5, 0.2)
  auto.rotation.x=1.57;
  gltf.scene.scale.set(0.0015*gltf.scene.scale.x, 0.009*gltf.scene.scale.y, 0.001*gltf.scene.scale.z)
  road.add(gltf.scene);
});

///////////////////////////////////////////////////////////////////////////////////

//blok 3
const buildingGeometry2 = new THREE.BoxGeometry( 2.6, 3, 1.6 );
const buildingMaterial2 = new THREE.MeshLambertMaterial( { map: textureLoader.load(BuildingTexture3) } );
const building3 = new THREE.Mesh( buildingGeometry2, buildingMaterial2 );
building3.position.set(6.6, 1, -8);
scene.add( building3 );
//fundament 3
var Fun3 = Fun1.clone();
Fun3.position.set(6.6, -0.5, -7.95);
Fun3.rotation.y=1.58;
scene.add(Fun3);
//dach 3
var Dach3 = Dach1.clone();
Dach3.position.set(6.6, 2.5, -8);
Dach3.rotation.y=1.58;
scene.add(Dach3);
//krzaki 3
var kopia_group_ObaKrzaki2 = group_ObaKrzaki.clone();
kopia_group_ObaKrzaki2.position.x=13.6;
kopia_group_ObaKrzaki2.position.z=-15.2;
kopia_group_ObaKrzaki2.rotation.y=1.6;
scene.add(kopia_group_ObaKrzaki2);

var kopia_group_ObaKrzaki6 = group7.clone();
kopia_group_ObaKrzaki6.position.x=16;
scene.add(kopia_group_ObaKrzaki6);

var kopia_group_ObaKrzaki7 = group7.clone();
kopia_group_ObaKrzaki7.position.x=11.3;
scene.add(kopia_group_ObaKrzaki7);

var kopia_group_ObaKrzaki8 = group7.clone();
kopia_group_ObaKrzaki8.position.x=13.8;
kopia_group_ObaKrzaki8.position.z=-16.4;
kopia_group_ObaKrzaki8.rotation.y=1.58;
scene.add(kopia_group_ObaKrzaki8);

///////////////////////////////////////////////////////////////////////////////////

//blok 4
const building4 = new THREE.Mesh( buildingGeometry2, buildingMaterial2 );
building4.position.set(-8.5, 1.1, 8);
scene.add( building4 );
//fundament 4
var Fun4 = Fun1.clone();
Fun4.position.set(-8.5, -0.5, 8.05);
Fun4.rotation.y=1.58;
scene.add(Fun4);
//dach 4
var Dach4 = Dach1.clone();
Dach4.position.set(-8.5, 2.65, 8);
Dach4.rotation.y=1.58;
scene.add(Dach4);
//chodnik
loader.load("wszystkie/Sidewalk/scene.gltf", function (gltf) {
  const auto = gltf.scene;
  auto.position.set(-8.6, -9.4, 0.2)
  auto.rotation.y=1.58;
  auto.rotation.x=1.57;
  gltf.scene.scale.set(0.0015*gltf.scene.scale.x, 0.009*gltf.scene.scale.y, 0.001*gltf.scene.scale.z)
  road.add(gltf.scene);
});
//krzaki
loader.load("wszystkie/Garden1/scene.gltf", function (gltf) {
  const auto = gltf.scene;
  auto.position.set(2.3, -6.6, -0.8)
  auto.rotation.x=1.5;
  auto.rotation.y=1.5;
  gltf.scene.scale.set(90*gltf.scene.scale.x, 90*gltf.scene.scale.y, 90*gltf.scene.scale.z)
  road.add(gltf.scene);
});

///////////////////////////////////////////////////////////////////////////////////

//prost blok 1
const buildingGeometry3 = new THREE.BoxGeometry( 2, 3.8, 2 );
const buildingMaterial3 = new THREE.MeshLambertMaterial( { map: textureLoader.load(BuildingTexture) } );
const building5 = new THREE.Mesh( buildingGeometry3, buildingMaterial3 );
building5.position.set(-8.5, 1.3, 0.5);
scene.add( building5 );
//fundament 5
const FunGeo2 = new THREE.BoxGeometry(2.3, 0.2, 2.34 );
const FunMat2 = new THREE.MeshLambertMaterial( { color: 0xffffff } );
const Fun5 = new THREE.Mesh( FunGeo2, FunMat2 );
Fun5.position.set(-8.5, -0.5, 0.55);
scene.add( Fun5 );
//dach 5
const DachGeo2 = new THREE.BoxGeometry( 2, 0.1, 2 );
const DachMat2 = new THREE.MeshLambertMaterial( { color: 0xC0C0C0 } );
const Dach5 = new THREE.Mesh( DachGeo2, DachMat2 );
Dach5.position.set(-8.5, 3.25, 0.5);
scene.add( Dach5 );
//płot
loader.load("wszystkie/Płot/scene.gltf", function (gltf) {
  const auto = gltf.scene;
  auto.position.set(-10, 1.74, 0.03)
  auto.rotation.y=1.58;
  auto.rotation.x=1.57;
  gltf.scene.scale.set(0.8*gltf.scene.scale.x, 0.8*gltf.scene.scale.y, 0.8*gltf.scene.scale.z)
  road.add(gltf.scene);
});

loader.load("wszystkie/Płot/scene.gltf", function (gltf) {
  const auto = gltf.scene;
  auto.position.set(-10, 0.74, 0.03)
  auto.rotation.y=1.58;
  auto.rotation.x=1.57;
  gltf.scene.scale.set(0.8*gltf.scene.scale.x, 0.8*gltf.scene.scale.y, 0.8*gltf.scene.scale.z)
  road.add(gltf.scene);
});

loader.load("wszystkie/Płot/scene.gltf", function (gltf) {
  const auto = gltf.scene;
  auto.position.set(-10, -0.3, 0.03)
  auto.rotation.y=1.58;
  auto.rotation.x=1.57;
  gltf.scene.scale.set(0.8*gltf.scene.scale.x, 0.8*gltf.scene.scale.y, 0.8*gltf.scene.scale.z)
  road.add(gltf.scene);
});

loader.load("wszystkie/Płot/scene.gltf", function (gltf) {
  const auto = gltf.scene;
  auto.position.set(-10, -1.3, 0.03)
  auto.rotation.y=1.58;
  auto.rotation.x=1.57;
  gltf.scene.scale.set(0.8*gltf.scene.scale.x, 0.8*gltf.scene.scale.y, 0.8*gltf.scene.scale.z)
  road.add(gltf.scene);
});

loader.load("wszystkie/Płot/scene.gltf", function (gltf) {
  const auto = gltf.scene;
  auto.position.set(-7, 1.74, 0.03)
  auto.rotation.y=1.58;
  auto.rotation.x=1.57;
  gltf.scene.scale.set(0.8*gltf.scene.scale.x, 0.8*gltf.scene.scale.y, 0.8*gltf.scene.scale.z)
  road.add(gltf.scene);
});

loader.load("wszystkie/Płot/scene.gltf", function (gltf) {
  const auto = gltf.scene;
  auto.position.set(-7, 0.74, 0.03)
  auto.rotation.y=1.58;
  auto.rotation.x=1.57;
  gltf.scene.scale.set(0.8*gltf.scene.scale.x, 0.8*gltf.scene.scale.y, 0.8*gltf.scene.scale.z)
  road.add(gltf.scene);
});

loader.load("wszystkie/Płot/scene.gltf", function (gltf) {
  const auto = gltf.scene;
  auto.position.set(-7, -0.3, 0.03)
  auto.rotation.y=1.58;
  auto.rotation.x=1.57;
  gltf.scene.scale.set(0.8*gltf.scene.scale.x, 0.8*gltf.scene.scale.y, 0.8*gltf.scene.scale.z)
  road.add(gltf.scene);
});

loader.load("wszystkie/Płot/scene.gltf", function (gltf) {
  const auto = gltf.scene;
  auto.position.set(-7, -1.3, 0.03)
  auto.rotation.y=1.58;
  auto.rotation.x=1.57;
  gltf.scene.scale.set(0.8*gltf.scene.scale.x, 0.8*gltf.scene.scale.y, 0.8*gltf.scene.scale.z)
  road.add(gltf.scene);
});
//chodnik
loader.load("wszystkie/Sidewalk/scene.gltf", function (gltf) {
  const auto = gltf.scene;
  auto.position.set(-8.6, -2.55, 0.19)
  auto.rotation.y=1.58;
  auto.rotation.x=1.57;
  gltf.scene.scale.set(0.0015*gltf.scene.scale.x, 0.009*gltf.scene.scale.y, 0.001*gltf.scene.scale.z)
  road.add(gltf.scene);
});
///////////////////////////////////////////////////////////////////////////////////

//prost blok 2
const building6 = new THREE.Mesh( buildingGeometry3, buildingMaterial3 );
building6.position.set(-0.5, 1.3, 8.6);
scene.add( building6 );
//fundament 6
var Fun6 = Fun5.clone();
Fun6.position.set(-0.55, -0.5, 8.6);
Fun6.rotation.y=1.58;
scene.add(Fun6);
//dach 6
var Dach6 = Dach5.clone();
Dach6.position.set(-0.5, 3.25, 8.6);
scene.add(Dach6);
//drzewa 6
var kopiaDrzewo2 = Group12.clone();
kopiaDrzewo2.position.set(6.2, 0, 15.4);
scene.add(kopiaDrzewo2);

var kopiaDrzewo7 = Group12.clone();
kopiaDrzewo7.position.set(9, 0, 20);
scene.add(kopiaDrzewo7);

var kopiaDrzewo6 = Group12.clone();
kopiaDrzewo6.position.set(0, 0, 15.4);
scene.add(kopiaDrzewo6);
//płot
loader.load("wszystkie/Płot/scene.gltf", function (gltf) {
  const auto = gltf.scene;
  auto.position.set(1, -5.9, 0.03)
  auto.rotation.x=1.57;
  gltf.scene.scale.set(0.8*gltf.scene.scale.x, 0.8*gltf.scene.scale.y, 0.8*gltf.scene.scale.z)
  road.add(gltf.scene);
});
loader.load("wszystkie/Płot/scene.gltf", function (gltf) {
  const auto = gltf.scene;
  auto.position.set(0, -5.9, 0.03)
  auto.rotation.x=1.57;
  gltf.scene.scale.set(0.8*gltf.scene.scale.x, 0.8*gltf.scene.scale.y, 0.8*gltf.scene.scale.z)
  road.add(gltf.scene);
});
loader.load("wszystkie/Płot/scene.gltf", function (gltf) {
  const auto = gltf.scene;
  auto.position.set(-1, -5.9, 0.03)
  auto.rotation.x=1.57;
  gltf.scene.scale.set(0.8*gltf.scene.scale.x, 0.8*gltf.scene.scale.y, 0.8*gltf.scene.scale.z)
  road.add(gltf.scene);
});
loader.load("wszystkie/Płot/scene.gltf", function (gltf) {
  const auto = gltf.scene;
  auto.position.set(-2, -5.9, 0.03)
  auto.rotation.x=1.57;
  gltf.scene.scale.set(0.8*gltf.scene.scale.x, 0.8*gltf.scene.scale.y, 0.8*gltf.scene.scale.z)
  road.add(gltf.scene);
});
loader.load("wszystkie/Płot/scene.gltf", function (gltf) {
  const auto = gltf.scene;
  auto.position.set(-3, -5.9, 0.03)
  auto.rotation.x=1.57;
  gltf.scene.scale.set(0.8*gltf.scene.scale.x, 0.8*gltf.scene.scale.y, 0.8*gltf.scene.scale.z)
  road.add(gltf.scene);
});
loader.load("wszystkie/Płot/scene.gltf", function (gltf) {
  const auto = gltf.scene;
  auto.position.set(-3.5, -6.4, 0.03)
  auto.rotation.y=1.58;
  auto.rotation.x=1.57;
  gltf.scene.scale.set(0.8*gltf.scene.scale.x, 0.8*gltf.scene.scale.y, 0.8*gltf.scene.scale.z)
  road.add(gltf.scene);
});
loader.load("wszystkie/Płot/scene.gltf", function (gltf) {
  const auto = gltf.scene;
  auto.position.set(1.5, -6.4, 0.03)
  auto.rotation.y=1.58;
  auto.rotation.x=1.57;
  gltf.scene.scale.set(0.8*gltf.scene.scale.x, 0.8*gltf.scene.scale.y, 0.8*gltf.scene.scale.z)
  road.add(gltf.scene);
});
loader.load("wszystkie/Płot/scene.gltf", function (gltf) {
  const auto = gltf.scene;
  auto.position.set(1.5, -7.4, 0.03)
  auto.rotation.y=1.58;
  auto.rotation.x=1.57;
  gltf.scene.scale.set(0.8*gltf.scene.scale.x, 0.8*gltf.scene.scale.y, 0.8*gltf.scene.scale.z)
  road.add(gltf.scene);
});
loader.load("wszystkie/Płot/scene.gltf", function (gltf) {
  const auto = gltf.scene;
  auto.position.set(1.5, -8.4, 0.03)
  auto.rotation.y=1.58;
  auto.rotation.x=1.57;
  gltf.scene.scale.set(0.8*gltf.scene.scale.x, 0.8*gltf.scene.scale.y, 0.8*gltf.scene.scale.z)
  road.add(gltf.scene);
});
loader.load("wszystkie/Płot/scene.gltf", function (gltf) {
  const auto = gltf.scene;
  auto.position.set(1.5, -9.4, 0.03)
  auto.rotation.y=1.58;
  auto.rotation.x=1.57;
  gltf.scene.scale.set(0.8*gltf.scene.scale.x, 0.8*gltf.scene.scale.y, 0.8*gltf.scene.scale.z)
  road.add(gltf.scene);
});
loader.load("wszystkie/Płot/scene.gltf", function (gltf) {
  const auto = gltf.scene;
  auto.position.set(1, -9.9, 0.03)
  auto.rotation.x=1.57;
  gltf.scene.scale.set(0.8*gltf.scene.scale.x, 0.8*gltf.scene.scale.y, 0.8*gltf.scene.scale.z)
  road.add(gltf.scene);
});
loader.load("wszystkie/Płot/scene.gltf", function (gltf) {
  const auto = gltf.scene;
  auto.position.set(0, -9.9, 0.03)
  auto.rotation.x=1.57;
  gltf.scene.scale.set(0.8*gltf.scene.scale.x, 0.8*gltf.scene.scale.y, 0.8*gltf.scene.scale.z)
  road.add(gltf.scene);
});
loader.load("wszystkie/Płot/scene.gltf", function (gltf) {
  const auto = gltf.scene;
  auto.position.set(-1, -9.9, 0.03)
  auto.rotation.x=1.57;
  gltf.scene.scale.set(0.8*gltf.scene.scale.x, 0.8*gltf.scene.scale.y, 0.8*gltf.scene.scale.z)
  road.add(gltf.scene);
});
loader.load("wszystkie/Płot/scene.gltf", function (gltf) {
  const auto = gltf.scene;
  auto.position.set(-2, -9.9, 0.03)
  auto.rotation.x=1.57;
  gltf.scene.scale.set(0.8*gltf.scene.scale.x, 0.8*gltf.scene.scale.y, 0.8*gltf.scene.scale.z)
  road.add(gltf.scene);
});
loader.load("wszystkie/Płot/scene.gltf", function (gltf) {
  const auto = gltf.scene;
  auto.position.set(-3, -9.9, 0.03)
  auto.rotation.x=1.57;
  gltf.scene.scale.set(0.8*gltf.scene.scale.x, 0.8*gltf.scene.scale.y, 0.8*gltf.scene.scale.z)
  road.add(gltf.scene);
});
loader.load("wszystkie/Płot/scene.gltf", function (gltf) {
  const auto = gltf.scene;
  auto.position.set(-3.5, -9.4, 0.03)
  auto.rotation.y=1.58;
  auto.rotation.x=1.57;
  gltf.scene.scale.set(0.8*gltf.scene.scale.x, 0.8*gltf.scene.scale.y, 0.8*gltf.scene.scale.z)
  road.add(gltf.scene);
});
//chodnik
loader.load("wszystkie/Sidewalk/scene.gltf", function (gltf) {
  const auto = gltf.scene;
  auto.position.set(-3, -8.1, 0.2)
  auto.rotation.x=1.57;
  gltf.scene.scale.set(0.0015*gltf.scene.scale.x, 0.009*gltf.scene.scale.y, 0.001*gltf.scene.scale.z)
  road.add(gltf.scene);
});

///////////////////////////////////////////////////////////////////////////////////

//wiezowiec 1
const buildingGeometry4 = new THREE.BoxGeometry( 2.8, 2.8, 2.8 );
const buildingMaterial4 = new THREE.MeshLambertMaterial( { map: textureLoader.load(BuildingTexture4) } );
const building7 = new THREE.Mesh( buildingGeometry4, buildingMaterial4 );
building7.position.set(-0.5, 1, 0.8);
scene.add( building7 );

const buildingGeometry5 = new THREE.BoxGeometry( 2.2, 2.8, 2.2 );
const buildingMaterial5 = new THREE.MeshLambertMaterial( { map: textureLoader.load(BuildingTexture4) } );
const building8 = new THREE.Mesh( buildingGeometry5, buildingMaterial5 );
building8.position.set(-0.5, 3.8, 0.8);
scene.add( building8 );

const buildingGeometry6 = new THREE.BoxGeometry( 1.6, 2.8, 1.6 );
const buildingMaterial6 = new THREE.MeshLambertMaterial( { map: textureLoader.load(BuildingTexture4) } );
const building9 = new THREE.Mesh( buildingGeometry6, buildingMaterial6 );
building9.position.set(-0.5, 6.3, 0.8);
scene.add( building9 );

const geometry = new THREE.CylinderGeometry( 0.04, 0.9, 2, 4 );
const material = new THREE.MeshLambertMaterial( {color: 0xffffff} );
const cylinder = new THREE.Mesh( geometry, material );
cylinder.position.set(-0.5, 8.7, 0.8);
cylinder.rotation.y=10.2;
scene.add( cylinder );

const buildingGeometry7 = new THREE.BoxGeometry( 0.04, 2.8, 0.04 );
const buildingMaterial7 = new THREE.MeshLambertMaterial( { color: 0xffffff } );
const building10 = new THREE.Mesh( buildingGeometry7, buildingMaterial7 );
building10.position.set(-0.5, 9.6, 0.8);
scene.add( building10 );
//fundament 7
const FunGeo3 = new THREE.BoxGeometry(3.2, 0.2, 3 );
const FunMat3 = new THREE.MeshLambertMaterial( { color: 0xffffff } );
const Fun7 = new THREE.Mesh( FunGeo3, FunMat3 );
Fun7.position.set(-0.55, -0.5, 0.8);
scene.add( Fun7 );
//pietra 7
const PieGeo = new THREE.BoxGeometry(3, 0.05, 3 );
const PieMat = new THREE.MeshLambertMaterial( { color: 0xffffff } );
const Pie1 = new THREE.Mesh( PieGeo,PieMat );
Pie1.position.set(-0.5, 2.4, 0.8);
scene.add( Pie1 );

const PieGeo2 = new THREE.BoxGeometry(2.35, 0.05, 2.35 );
const PieMat2 = new THREE.MeshLambertMaterial( { color: 0xffffff } );
const Pie2 = new THREE.Mesh( PieGeo2,PieMat2 );
Pie2.position.set(-0.5, 5.2, 0.8);
scene.add( Pie2 );

const PieGeo3 = new THREE.BoxGeometry(1.7, 0.05, 1.7 );
const PieMat3 = new THREE.MeshLambertMaterial( { color: 0xffffff } );
const Pie3 = new THREE.Mesh( PieGeo3,PieMat3 );
Pie3.position.set(-0.5, 7.7, 0.8);
scene.add( Pie3 );
//drzewa 7
var kopiaDrzewo = Group12.clone();
kopiaDrzewo.position.set(6.2, 0, 8.8);
scene.add(kopiaDrzewo);
//płot
loader.load("wszystkie/Płot/scene.gltf", function (gltf) {
  const auto = gltf.scene;
  auto.position.set(1, 2.2, 0.03)
  auto.rotation.x=1.57;
  gltf.scene.scale.set(0.8*gltf.scene.scale.x, 0.8*gltf.scene.scale.y, 0.8*gltf.scene.scale.z)
  road.add(gltf.scene);
});

loader.load("wszystkie/Płot/scene.gltf", function (gltf) {
  const auto = gltf.scene;
  auto.position.set(0, 2.2, 0.03)
  auto.rotation.x=1.57;
  gltf.scene.scale.set(0.8*gltf.scene.scale.x, 0.8*gltf.scene.scale.y, 0.8*gltf.scene.scale.z)
  road.add(gltf.scene);
});

loader.load("wszystkie/Płot/scene.gltf", function (gltf) {
  const auto = gltf.scene;
  auto.position.set(-1, 2.2, 0.03)
  auto.rotation.x=1.57;
  gltf.scene.scale.set(0.8*gltf.scene.scale.x, 0.8*gltf.scene.scale.y, 0.8*gltf.scene.scale.z)
  road.add(gltf.scene);
});

loader.load("wszystkie/Płot/scene.gltf", function (gltf) {
  const auto = gltf.scene;
  auto.position.set(-2, 2.2, 0.03)
  auto.rotation.x=1.57;
  gltf.scene.scale.set(0.8*gltf.scene.scale.x, 0.8*gltf.scene.scale.y, 0.8*gltf.scene.scale.z)
  road.add(gltf.scene);
});

loader.load("wszystkie/Płot/scene.gltf", function (gltf) {
  const auto = gltf.scene;
  auto.position.set(-3, 2.2, 0.03)
  auto.rotation.x=1.57;
  gltf.scene.scale.set(0.8*gltf.scene.scale.x, 0.8*gltf.scene.scale.y, 0.8*gltf.scene.scale.z)
  road.add(gltf.scene);
});

loader.load("wszystkie/Płot/scene.gltf", function (gltf) {
  const auto = gltf.scene;
  auto.position.set(-3.5, 1.74, 0.03)
  auto.rotation.y=1.58;
  auto.rotation.x=1.57;
  gltf.scene.scale.set(0.8*gltf.scene.scale.x, 0.8*gltf.scene.scale.y, 0.8*gltf.scene.scale.z)
  road.add(gltf.scene);
});

loader.load("wszystkie/Płot/scene.gltf", function (gltf) {
  const auto = gltf.scene;
  auto.position.set(1.5, 1.74, 0.03)
  auto.rotation.y=1.58;
  auto.rotation.x=1.57;
  gltf.scene.scale.set(0.8*gltf.scene.scale.x, 0.8*gltf.scene.scale.y, 0.8*gltf.scene.scale.z)
  road.add(gltf.scene);
});

loader.load("wszystkie/Płot/scene.gltf", function (gltf) {
  const auto = gltf.scene;
  auto.position.set(1.5, 0.74, 0.03)
  auto.rotation.y=1.58;
  auto.rotation.x=1.57;
  gltf.scene.scale.set(0.8*gltf.scene.scale.x, 0.8*gltf.scene.scale.y, 0.8*gltf.scene.scale.z)
  road.add(gltf.scene);
});

loader.load("wszystkie/Płot/scene.gltf", function (gltf) {
  const auto = gltf.scene;
  auto.position.set(1.5, -0.3, 0.03)
  auto.rotation.y=1.58;
  auto.rotation.x=1.57;
  gltf.scene.scale.set(0.8*gltf.scene.scale.x, 0.8*gltf.scene.scale.y, 0.8*gltf.scene.scale.z)
  road.add(gltf.scene);
});

loader.load("wszystkie/Płot/scene.gltf", function (gltf) {
  const auto = gltf.scene;
  auto.position.set(1.5, -1.3, 0.03)
  auto.rotation.y=1.58;
  auto.rotation.x=1.57;
  gltf.scene.scale.set(0.8*gltf.scene.scale.x, 0.8*gltf.scene.scale.y, 0.8*gltf.scene.scale.z)
  road.add(gltf.scene);
});
//chodnik
loader.load("wszystkie/Sidewalk/scene.gltf", function (gltf) {
  const auto = gltf.scene;
  auto.position.set(-3, -0.3, 0.19)
  auto.rotation.x=1.57;
  gltf.scene.scale.set(0.0015*gltf.scene.scale.x, 0.009*gltf.scene.scale.y, 0.001*gltf.scene.scale.z)
  road.add(gltf.scene);
});
//krzaki
loader.load("wszystkie/Garden1/scene.gltf", function (gltf) {
  const auto = gltf.scene;
  auto.position.set(3.5, -11.1, 0)
  auto.rotation.x=1.5;
 auto.rotation.y=0.1;
  gltf.scene.scale.set(90*gltf.scene.scale.x, 90*gltf.scene.scale.y, 90*gltf.scene.scale.z)
  road.add(gltf.scene);
});
///////////////////////////////////////////////////////////////////////////////////

//budynek 8
loader.load("wszystkie/Budynek1/scene.gltf", function (gltf) {
  const auto = gltf.scene;
  auto.position.set(7.5, 0, 0.3)
  auto.rotation.x=1.58;
  auto.rotation.y=4.74;
  gltf.scene.scale.set(0.02*gltf.scene.scale.x, 0.02*gltf.scene.scale.y, 0.02*gltf.scene.scale.z)
  road.add(gltf.scene);
});
//drzewa 8
var kopiaDrzewo3 = Group12.clone();
kopiaDrzewo3.position.set(19.2, 0, 10.8);
scene.add(kopiaDrzewo3);

var kopiaDrzewo4 = Group12.clone();
kopiaDrzewo4.position.set(14.2, 0, 11.8);
scene.add(kopiaDrzewo4);

var kopiaDrzewo5 = Group12.clone();
kopiaDrzewo5.position.set(18.8, 0, 11.8);
scene.add(kopiaDrzewo5);
//chodnik
loader.load("wszystkie/Sidewalk/scene.gltf", function (gltf) {
  const auto = gltf.scene;
  auto.position.set(4.4, 0, 0.2)
  auto.rotation.x=1.57;
  gltf.scene.scale.set(0.0015*gltf.scene.scale.x, 0.009*gltf.scene.scale.y, 0.001*gltf.scene.scale.z)
  road.add(gltf.scene);
});
////////////////////////////////////////////////////////     WEJSCIA    /////////////////////////////////////////////////////////

//Wejscie wiezowiec
const Wej1Geo = new THREE.BoxGeometry( 0.1, 0.38, 0.2 );
const Wej1Mat = new THREE.MeshLambertMaterial( { color: 0x000000 } );
const Wej1 = new THREE.Mesh( Wej1Geo, Wej1Mat );
Wej1.position.set(-1.9, -0.2, 0.8);
scene.add( Wej1 );

const WejB1Geo = new THREE.BoxGeometry( 0.15, 0.43, 0.25 );
const WejB1Mat = new THREE.MeshLambertMaterial( { color: 0xffffff } );
const WejB1 = new THREE.Mesh( WejB1Geo, WejB1Mat );
WejB1.position.set(-1.85, -0.2, 0.8);
scene.add( WejB1 );

var Wejscie = new THREE.Group();
Wejscie.add(Wej1);
Wejscie.add(WejB1);
scene.add(Wejscie);
//Wejscie prost blok 1
var kopia_Wejscie = Wejscie.clone();
kopia_Wejscie.position.set(-9.3, 0.01, -0.37);
kopia_Wejscie.rotation.y=1.6;
scene.add(kopia_Wejscie);
//Wejscie blok 4
var kopia_Wejscie2 = kopia_Wejscie.clone();
kopia_Wejscie2.position.set(-9.235, 0.01, 6.88);
kopia_Wejscie2.rotation.y=1.6;
scene.add(kopia_Wejscie2);
//Wejscie prost blok 2
var kopia_Wejscie3 = Wejscie.clone();
kopia_Wejscie3.position.set(0.4, 0, 7.8);
scene.add(kopia_Wejscie3);
//Wejscie blok 2
var kopia_Wejscie4 = Wejscie.clone();
kopia_Wejscie4.position.set(0.6, 0, -7.8);
scene.add(kopia_Wejscie4);
//Wejscie blok 1
var kopia_Wejscie5 = kopia_Wejscie4.clone();
kopia_Wejscie5.position.set(-7.4, 0, -7.8);
scene.add(kopia_Wejscie5);
//Wejscie blok 3
var kopia_Wejscie6 = Wejscie.clone();
kopia_Wejscie6.position.set(5.8, 0, -9.05);
kopia_Wejscie6.rotation.y=1.6;
scene.add(kopia_Wejscie6);

////////////////////////////////////////////////////////     PODWÓRKA    /////////////////////////////////////////////////////////

const liniaGeo = new THREE.BoxGeometry( 23, 0.1, 0.2 );
const liniaMat = new THREE.MeshLambertMaterial( {color: 0xffffff} );
const linia = new THREE.Mesh( liniaGeo, liniaMat );
linia.position.set(0, -0.35, 3.6);
scene.add( linia );

const linia2 = new THREE.Mesh( liniaGeo, liniaMat );
linia2.position.set(0, -0.35, 5.6);
scene.add( linia2 );

const linia3 = new THREE.Mesh( liniaGeo, liniaMat );
linia3.position.set(0, -0.35, 11.4);
scene.add( linia3 );

const linia4 = new THREE.Mesh( liniaGeo, liniaMat );
linia4.position.set(0, -0.35, -2.2);
scene.add( linia4 );

const linia5 = new THREE.Mesh( liniaGeo, liniaMat );
linia5.position.set(0, -0.35, -4.2);
scene.add( linia5 );

const linia6 = new THREE.Mesh( liniaGeo, liniaMat );
linia6.position.set(0, -0.35, -10);
scene.add( linia6 );

var group = new THREE.Group();
group.add(linia);
group.add(linia5);
group.add(linia2);
group.add(linia3);
scene.add(group);

var groupCopy = group.clone();
groupCopy.position.x=-1.7;
groupCopy.rotation.y=1.58;
scene.add(groupCopy);

const linia7 = new THREE.Mesh( liniaGeo, liniaMat );
linia7.position.set(-10.8, -0.35, 0);
linia7.rotation.y=1.58;
scene.add( linia7 );

const linia8 = new THREE.Mesh( liniaGeo, liniaMat );
linia8.position.set(-6.2, -0.35, 0);
linia8.rotation.y=1.58;
scene.add( linia8 );

const linia9 = new THREE.Mesh( liniaGeo, liniaMat );
linia9.position.set(-4.2, -0.35, 0);
linia9.rotation.y=1.58;
scene.add( linia9 );

////////////////////////////////////////////////////////     PODWORKA 2     /////////////////////////////////////////////////////////
//Długie na zewnatrz
const liniaGeo2 = new THREE.BoxGeometry( 5, 0.03, 0.1 );
const liniaMat2 = new THREE.MeshLambertMaterial( {color: 0xffffff} );
const Tlinia = new THREE.Mesh( liniaGeo2, liniaMat2 );
Tlinia.position.set(-1.3, -0.35, -9.55);
scene.add( Tlinia );

const liniaGeo3 = new THREE.BoxGeometry( 4.9, 0.03, 0.1 );
const liniaMat3 = new THREE.MeshLambertMaterial( {color: 0xffffff} );
const Tlinia2 = new THREE.Mesh( liniaGeo3, liniaMat3 );
Tlinia2.position.set(1.2, -0.35, -7.1);
Tlinia2.rotation.y=1.58;
scene.add( Tlinia2 );

const Tlinia3 = new THREE.Mesh( liniaGeo2, liniaMat2 );
Tlinia3.position.set(-1.3, -0.35, -4.65);
scene.add( Tlinia3 );
//Krótkie na zewnatrz
const liniaGeo4 = new THREE.BoxGeometry( 1.55, 0.03, 0.1 );
const liniaMat4 = new THREE.MeshLambertMaterial( {color: 0xffffff} );
const Tlinia4 = new THREE.Mesh( liniaGeo4, liniaMat4 );
Tlinia4.position.set(-3.8, -0.35, -5.4);
Tlinia4.rotation.y=1.58;
scene.add( Tlinia4 );

const Tlinia5 = new THREE.Mesh( liniaGeo4, liniaMat4 );
Tlinia5.position.set(-3.8, -0.35, -8.8);
Tlinia5.rotation.y=1.58;
scene.add( Tlinia5 );

//Krótkie wewnątrz
const liniaGeo5 = new THREE.BoxGeometry( 1.26, 0.03, 0.1 );
const liniaMat5 = new THREE.MeshLambertMaterial( {color: 0xffffff} );
const Tlinia6 = new THREE.Mesh( liniaGeo5, liniaMat5 );
Tlinia6.position.set(-3.5, -0.35, -5.55);
Tlinia6.rotation.y=1.58;
scene.add( Tlinia6 );

const Tlinia7 = new THREE.Mesh( liniaGeo5, liniaMat5 );
Tlinia7.position.set(-3.5, -0.35, -8.7);
Tlinia7.rotation.y=1.58;
scene.add( Tlinia7 );

//Dlugie wewnatrz
const liniaGeo6 = new THREE.BoxGeometry( 4.4, 0.03, 0.1 );
const liniaMat6 = new THREE.MeshLambertMaterial( {color: 0xffffff} );
const Tlinia8 = new THREE.Mesh( liniaGeo6, liniaMat6 );
Tlinia8.position.set(-1.25, -0.35, -4.95);
scene.add( Tlinia8 );

const Tlinia9 = new THREE.Mesh( liniaGeo6, liniaMat6 );
Tlinia9.position.set(-1.25, -0.35, -9.28);
scene.add( Tlinia9 );

const liniaGeo7 = new THREE.BoxGeometry( 4.45, 0.03, 0.1 );
const liniaMat7 = new THREE.MeshLambertMaterial( {color: 0xffffff} );
const Tlinia10 = new THREE.Mesh( liniaGeo7, liniaMat7 );
Tlinia10.position.set(0.9, -0.35, -7.1);
Tlinia10.rotation.y=1.58;
scene.add( Tlinia10 );

const liniaGeo8 = new THREE.BoxGeometry( 0.39, 0.03, 0.1 );
const liniaMat8 = new THREE.MeshLambertMaterial( {color: 0xffffff} );
const Tlinia11 = new THREE.Mesh( liniaGeo8, liniaMat8 );
Tlinia11.position.set(-3.65, -0.35, -6.15);
scene.add( Tlinia11 );

const Tlinia12 = new THREE.Mesh( liniaGeo8, liniaMat8 );
Tlinia12.position.set(-3.65, -0.35, -8.04);
scene.add( Tlinia12 );

var group2 = new THREE.Group();
group2.add(Tlinia);
group2.add(Tlinia2);
group2.add(Tlinia3);
group2.add(Tlinia4);
group2.add(Tlinia5);
group2.add(Tlinia6);
group2.add(Tlinia7);
group2.add(Tlinia8);
group2.add(Tlinia9);
group2.add(Tlinia10);
group2.add(Tlinia11);
group2.add(Tlinia12);
scene.add(group2);

var groupCopy2 = group2.clone();
groupCopy2.position.set(13.8, 0.05, -8.45);
groupCopy2.rotation.y=1.58;
scene.add(groupCopy2);

var group3 = new THREE.Group();
group3.add(Tlinia2);
group3.add(Tlinia10);
scene.add(group3);

var groupCopy3 = group3.clone();
groupCopy3.position.set(-8, 0, 0);
scene.add(groupCopy3);

var group4 = new THREE.Group();
group4.add(Tlinia4);
group4.add(Tlinia5);
group4.add(Tlinia6);
group4.add(Tlinia7);
group4.add(Tlinia11);
group4.add(Tlinia12);
scene.add(group4);

var groupCopy4 = group4.clone();
groupCopy4.position.set(-6.65, 0.05, 0);
scene.add(groupCopy4);

const liniaGeo9 = new THREE.BoxGeometry( 3.72, 0.03, 0.1 );
const liniaMat9 = new THREE.MeshLambertMaterial( {color: 0xffffff} );
const Tlinia13 = new THREE.Mesh( liniaGeo9, liniaMat9 );
Tlinia13.position.set(-8.65, -0.3, -9.55);
scene.add( Tlinia13 );

var kopia_Tlinia13 = Tlinia13.clone();
kopia_Tlinia13.position.set(-8.65, -0.3, -4.65);
scene.add(kopia_Tlinia13);

const liniaGeo10 = new THREE.BoxGeometry( 3.1, 0.03, 0.1 );
const liniaMat10 = new THREE.MeshLambertMaterial( {color: 0xffffff} );
const Tlinia14 = new THREE.Mesh( liniaGeo10, liniaMat10 );
Tlinia14.position.set(-8.62, -0.3, -9.28);
scene.add( Tlinia14 );

var kopia_Tlinia14 = Tlinia14.clone();
kopia_Tlinia14.position.set(-8.62, -0.3, -4.92);
scene.add(kopia_Tlinia14);

var group5 = new THREE.Group();
group5.add(Tlinia13);
group5.add(Tlinia14);
scene.add(group5);

var group6 = new THREE.Group();
group6.add(Tlinia2);
group6.add(Tlinia10);
scene.add(group6);

////////////////////////////////////////////////////////     LATARNIE    /////////////////////////////////////////////////////////
//blok 2
const lampGeometry2 = new THREE.BoxGeometry( 0.1, 0.05, 0.04 );
const lampMaterial2 = new THREE.MeshLambertMaterial( {color: 0xffffff} );
const lamphead = new THREE.Mesh( lampGeometry2, lampMaterial2 );
lamphead.position.set(-4.04, 0.3, -9);
scene.add( lamphead );

const lampGeometry = new THREE.CylinderGeometry( 0.02, 0.02, 0.6, 31 );
const lampMaterial = new THREE.MeshLambertMaterial( { color: 0xffffff } );
const lamp1 = new THREE.Mesh( lampGeometry, lampMaterial );
lamp1.position.set(-4, 0, -9);
scene.add( lamp1 );

var group8 = new THREE.Group();
group8.add(lamphead);
group8.add(lamp1);
scene.add(group8);
//blok 1
var groupCopy9 = group8.clone();
groupCopy9.position.set(-1.6, 0, -8.5);
groupCopy9.rotation.y=1.58;
scene.add(groupCopy9);
//blok 4
var groupCopy6 = group8.clone();
groupCopy6.position.set(2.1, 0, 7.1);
groupCopy6.rotation.y=1.58;
scene.add(groupCopy6);

var groupCopy7 = group8.clone();
groupCopy7.position.set(-1.1, 0, 7.1);
groupCopy7.rotation.y=1.58;
scene.add(groupCopy7);
//blok prost 1
var group10 = new THREE.Group();
group10.add(groupCopy6);
group10.add(groupCopy7);
scene.add(group10);
//budynek 8
var groupCopy11 = group10.clone();
groupCopy11.position.set(15.7, 0, 8.6);
groupCopy11.rotation.y=4.74;
scene.add(groupCopy11);

/////////////////////////////////////////////////////    OSWIETLENIE LATARNI    /////////////////////////////////////////////////////////
//blok 1
var lightBulb3 = new THREE.PointLight( 0xffffff, 1, 100 );
lightBulb3.position.set(-11, 0.5, -4.5);
scene.add( lightBulb3 );
//blok 2
var lightBulb = new THREE.PointLight( 0xffffff, 1, 100 );
lightBulb.position.set(-4.04, 0.5, -9);
scene.add( lightBulb );
//blok 4
var lightBulb11 = new THREE.PointLight( 0xffffff, 1, 100 );
lightBulb11.position.set(-10.2,0.5, 11.4);
scene.add( lightBulb11 );
//blok prost 2
var lightBulb12 = new THREE.PointLight( 0xffffff, 1, 100 );
lightBulb12.position.set(3.9, 0.5, 2);
scene.add( lightBulb12 );

var lightBulb13 = new THREE.PointLight( 0xffffff, 1, 100 );
lightBulb13.position.set(3.9, 0.5, -1);
scene.add( lightBulb13 );

/////////////////////////////////////////////////////    DZIEN I NOC    /////////////////////////////////////////////////////////
//Tworzenie słońca
var sunGeometry = new THREE.SphereGeometry(1.3, 32, 32);
var sunMaterial = new THREE.MeshStandardMaterial({color: 0xffd700});
var sun = new THREE.Mesh(sunGeometry, sunMaterial);
sun.position.set(1, 1, 1);
scene.add(sun);

//Tworzymy światło słoneczne
var sunLight = new THREE.DirectionalLight(0xffffff, 1);
sunLight.position.set(1, 1, 1);
scene.add(sunLight);

//Tworzenie księżyca
var moonGeometry = new THREE.SphereGeometry(1, 32, 32);
var moonMaterial = new THREE.MeshStandardMaterial({color: 0xffffff});
var moon = new THREE.Mesh(moonGeometry, moonMaterial);
moon.position.set(-1, -1, -1);
scene.add(moon);

//Tworzymy światło księżycowe
var moonLight = new THREE.DirectionalLight(0xffffff, 0.2);
moonLight.position.set(-1, -1, -1);
scene.add(moonLight);

//Punkty widzenia
var viewpoints = [
  { x: -12, y: 0, z: 6 }, // punkt widzenia z drogi 
  { x: -8.6, y: 3.5, z: 8.4 }, // punkt widzenia z budynku
  { x: -10.8, y: 0.4, z: -4.3 }, // punkt widzenia z latarnii 
];

var changeViewpoint1 = function() {
  camera.position.set(viewpoints[0].x, viewpoints[0].y, viewpoints[0].z);
  camera.lookAt(new THREE.Vector3(0, 3, 0));}

var changeViewpoint2 = function() {
  camera.position.set(viewpoints[1].x, viewpoints[1].y, viewpoints[1].z);
  camera.lookAt(new THREE.Vector3(0, 4, 0));}

var changeViewpoint3 = function() {
      camera.position.set(viewpoints[2].x, viewpoints[2].y, viewpoints[2].z);
      camera.lookAt(new THREE.Vector3(0, 2.5, 0));}

  document.getElementById("button1").addEventListener("click", function() {
    changeViewpoint1(0);
  });
  document.getElementById("button2").addEventListener("click", function() {
    changeViewpoint2(1);
  });
  document.getElementById("button3").addEventListener("click", function() {
    changeViewpoint3(2);
  });

// Tworzymy zmienne dla animacji
var clock = new THREE.Clock();
var time = clock.getElapsedTime();

// Tworzymy animację
function animate() {
  requestAnimationFrame(animate);

  

  var delta = clock.getDelta();
  time += delta;
  
  // Pozycja słońca i księżyca
  sun.position.x = Math.sin(time*0.6) * 17;
  sun.position.y = Math.cos(time*0.6) * 17;
 moon.position.x = -sun.position.x;
  moon.position.y = -sun.position.y;

   sunLight.position.x = Math.sin(time*0.6) * 13;
   sunLight.position.y = Math.cos(time*0.6) * 13;
   moonLight.position.x = -sunLight.position.x;
    moonLight.position.y = -sunLight.position.y;

// Zapalanie i gaśnięcie latarni
  var lightIntensity = Math.sin(time*0.6);
  lightBulb.intensity = lightIntensity;
  lightBulb3.intensity = lightIntensity;
  lightBulb11.intensity = lightIntensity;
  lightBulb12.intensity = lightIntensity;
  lightBulb13.intensity = lightIntensity;
 
  renderer.render( scene, camera );
}

animate();
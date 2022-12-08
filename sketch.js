// vars
var bg,bgImg;
var startbuimg;
var startbu;
var solo;

var flagrays = 0;
var rays;
var raysimg;
var raysweaponimg;
var weapon;

var botaofinal;
var finalbu;

var vitorimg;
var vitor1;
var vidavitor = 200;

var estadojg = 0;

var frasco;
var frasco1;
var frasco2;

//residentes -->
var res1;
var res1ini;
var res1wea;
var res2;
var res2ini;
var res2wea;
var resivida = 150;
var res3;
var res3ini;
var res3wea;
var res4;
var res4ini;
var res4wea;
var res5;
var res5ini;
var res5wea;
var nan;
var nanini;
var nanwea;


var estad1= false;
var estad2=false;
var estad3=false;
var estad4=false;
var estad5=false;
var estadn=false;
//var vmagroup;

function preload(){
  bgImg = loadImage("images/bg jogo.png");
  startbuimg = loadImage ("images/startbu.png");
  
  raysweaponimg = loadImage ("images/weapon.png");
  raysimg = loadImage ("images/ray.png");
 
  vitorimg = loadAnimation ("images/vitor.png");
  vitorbravo = loadAnimation ("images/vitorbravo.png")

  res1ini = loadAnimation ("images/resi 1 orig.png");
  res1wea = loadAnimation ("images/resi 1 w weapon.png")

  res2ini = loadAnimation ("images/resi 2 orig.png");
  res2wea = loadAnimation ("images/resi 2 w weapon.png");

  res3ini = loadAnimation ("images/resi 3 orig.png");
  res3wea = loadAnimation ("images/resi 3 w weapon.png");

  res4ini = loadAnimation ("images/resi 4 orig.png");
  res4wea = loadAnimation ("images/resi 4 w weapon.png");

  res5ini = loadAnimation ("images/resi 5 orig.png");
  res5wea = loadAnimation ("images/resi 5 w weapon.png");

  nanini = loadAnimation ("images/nan orig.png");
  nanwea = loadAnimation ("images/nan w weapon.png");

  frasco1 = loadAnimation ("images/frascoorig.png");
  frasco2 = loadAnimation ("images/frasco 1.png", "images/frasco 2.png", "images/frasco 3.png", "images/frasco 4.png");

  botaofinal = loadImage ("images/botaofg.png");

  botaoperder = loadImage ("images/vitorganho.png");

}

function setup() {
  createCanvas(windowWidth,windowHeight);

  startbu = createSprite (width/2, height/2);
  startbu.addImage (startbuimg);
  startbu.scale = 0.5;

  solo = createSprite (width/2, height- 30, 2000, 20);

  vitor1 = createSprite (1000,450);
  vitor1.addAnimation ("vitororig", vitorimg);
  vitor1.addAnimation ("vibravo", vitorbravo);
  vitor1.scale = 1.1;

  res1 = createSprite (300, -100, 20, 20);
  res1.addAnimation ("origres", res1ini);
  res1.addAnimation ("reswea", res1wea);
  res1.scale = 1;

  res2 = createSprite (300, -200, 20, 20);
  res2.addAnimation ("origres2", res2ini);
  res2.addAnimation ("res2wea", res2wea);
  res2.scale = 1.1;

  res3 = createSprite (300, -200, 20, 20);
  res3.addAnimation ("origres3", res3ini);
  res3.addAnimation ("res3wea", res3wea);
  res3.scale = 1.1;

  res4 = createSprite (300, -200, 20, 20);
  res4.addAnimation ("origres4", res4ini);
  res4.addAnimation ("res4wea", res4wea);
  res4.scale = 1.1;

  res5 = createSprite (300, -200, 20, 20);
  res5.addAnimation ("origres5", res5ini);
  res5.addAnimation ("res5wea", res5wea);
  res5.scale = 1.1;

  nan = createSprite (300, -200, 20, 20);
  nan.addAnimation ("orignan", nanini);
  nan.addAnimation ("nanwea", nanwea);
  nan.scale = 1.1;

  weapon = createSprite (500, 525);
  weapon.scale = 0.15;
  weapon.setCollider ("rectangle", 0, 0, 200, 200);
  weapon.addImage (raysweaponimg);

  frasco = createSprite (900, 490);
  frasco.scale = 0.2;
  frasco.addAnimation ("fraorig", frasco1);
  frasco.addAnimation ("girando", frasco2);

  rays = createSprite (500, 500);
    rays.addImage (raysimg);
    rays.visible = false;

  //vmagroup = new Group ();

}

function draw() {
  background(bgImg); 
  solo.visible = false;
 // frasco.debug = true;
  
  frasco.setCollider ("rectangle", 0, 0, 100, 40);

  frasco.visible = false;

  res1.collide (solo);
  res1.setCollider ("rectangle", 40, 0, 5, 250);
  //res1.debug=true;

  res2.collide (solo);
  res2.setCollider ("rectangle", 40, 0, 5, 220);

  res3.collide (solo);
  res3.setCollider ("rectangle", 40, 0, 5, 220);

  res4.collide (solo);
  res4.setCollider ("rectangle", 40, 0, 5, 220);

  res5.collide (solo);
  res5.setCollider ("rectangle", 40, 0,5, 220);

  nan.collide (solo);
  nan.setCollider ("rectangle", 40, 0, 5, 220);
  
  vitor1.setCollider ("rectangle", 0, 0, 300, 250);
  

  if (mousePressedOver (startbu) || keyCode == 13){
    startbu.visible = false;
    estadojg = 1;
    weapon.addImage (raysweaponimg);
    res1.velocityY = 10;
  }

  //bug : if (res1.collide (solo) && keyDown ("UP_ARROW")){
  //  res1.velocityY = -21;  
  //}

  if (keyDown ("LEFT_ARROW") && res1.x > 90){
    res1.x -= 10;
  }

  if (keyDown ("RIGHT_ARROW") && res1.x < 500){
    res1.x += 10;
  }
 
  if (keyDown ("LEFT_ARROW") && res2.x > 90){
    res2.x -= 10;
  }
  if (keyDown ("RIGHT_ARROW") && res2.x < 500){
    res2.x += 10;
  }
  
  if (keyDown ("LEFT_ARROW") && res3.x > 90){
    res3.x -= 10;
  }
  if (keyDown ("RIGHT_ARROW") && res3.x < 500){
    res3.x += 10;
  }

  if (keyDown ("LEFT_ARROW") && res4.x > 90){
    res4.x -= 10;
  }
  if (keyDown ("RIGHT_ARROW") && res4.x < 500){
    res4.x += 10;
  }

  if (keyDown ("LEFT_ARROW") && res5.x > 90){
    res5.x -= 10;
  }
  if (keyDown ("RIGHT_ARROW") && res5.x < 500){
    res5.x += 10;
  }

  if (keyDown ("LEFT_ARROW") && nan.x > 90){
    nan.x -= 10;
  }
  if (keyDown ("RIGHT_ARROW") && nan.x < 500){
    nan.x += 10;
  }

  if (res1.collide (solo)){
    weapon.visible = true;
  }

  if (res2.collide (solo)){
    weapon.visible = true;
  }
  

  if (res1.isTouching (weapon)){
    weapon.destroy ();
    res1.changeAnimation ("reswea");
  }

  if (rays){
    rays.setCollider ("rectangle", 0, 0, 100, 50);

    if (rays.collide (vitor1)){
    vidavitor -= 12;
    vitor1.changeAnimation ("vibravo");
    rays.y = res1.y + 50;
    rays.x = res1.x + 210;
    rays.visible = false;
    }

    if (keyDown ("SPACE")){
      rays.visible = true;
      rays.velocityX = 15; 
      rays.y = res1.y + 50;
      rays.x = res1.x + 210;
    }

    if (keyDown ("SPACE")&&estad2==true){
      rays.visible = true;
      rays.velocityX = 15; 
      rays.y = res2.y + 50;
      rays.x = res2.x + 210;
    }

    if (keyDown ("SPACE")&&estad3==true){
      rays.visible = true;
      rays.velocityX = 15; 
      rays.y = res3.y + 50;
      rays.x = res3.x + 210;
    }
    if (keyDown ("SPACE")&&estad4==true){
      rays.visible = true;
      rays.velocityX = 15; 
      rays.y = res4.y + 50;
      rays.x = res4.x + 210;
    }
    if (keyDown ("SPACE")&&estad5==true){
      rays.visible = true;
      rays.velocityX = 15; 
      rays.y = res5.y + 50;
      rays.x = res5.x + 210;
    }
    if (keyDown ("SPACE")&&estadn==true){
      rays.visible = true;
      rays.velocityX = 15; 
      rays.y = nan.y + 50;
      rays.x = nan.x + 210;
    }
    
    if (vidavitor == 176){
      res1.destroy ();
      res2.velocityY = 15;
estad2 = true;
      
      weapon = createSprite (500, 525);
      weapon.scale = 0.15;
      weapon.setCollider ("rectangle", 0, 0, 200, 200);
      weapon.addImage (raysweaponimg);
      weapon.visible = false;
    }

    if (vidavitor == 152){
    res2.destroy ();
    res3.velocityY = 15;
   estad3=true;
    weapon = createSprite (500, 525);
    weapon.scale = 0.15;
    weapon.setCollider ("rectangle", 0, 0, 200, 200);
    weapon.addImage (raysweaponimg);
    weapon.visible = false;
    }

    if (vidavitor == 128){
    res3.destroy ();
    res4.velocityY = 15;
  estad4=true;
    weapon = createSprite (500, 525);
    weapon.scale = 0.15;
    weapon.setCollider ("rectangle", 0, 0, 200, 200);
    weapon.addImage (raysweaponimg);
    weapon.visible = false;
    }

    if (vidavitor == 104){
    res4.destroy ();
    res5.velocityY = 15;
    estad5=true;
    weapon = createSprite (500, 525);
    weapon.scale = 0.15;
    weapon.setCollider ("rectangle", 0, 0, 200, 200);
    weapon.addImage (raysweaponimg);
    weapon.visible = false;
    }

    if (vidavitor == 80){
    res5.destroy ();
    nan.velocityY = 15;
estadn = true;
    weapon = createSprite (500, 525);
    weapon.scale = 0.15;
    weapon.setCollider ("rectangle", 0, 0, 200, 200);
    weapon.addImage (raysweaponimg);
    weapon.visible = false;
    }
    
  }

  if (res2.isTouching (weapon)){
    weapon.destroy ();
    res2.changeAnimation ("res2wea");

    rays = createSprite (500, 500);
    rays.addImage (raysimg);
    rays.visible = false;
  }

  if (res3.isTouching (weapon)){
    weapon.destroy ();
    res3.changeAnimation ("res3wea");

    rays = createSprite (500, 500);
    rays.addImage (raysimg);
    rays.visible = false;
  }

  if (res4.isTouching (weapon)){
    weapon.destroy ();
    res4.changeAnimation ("res4wea");

    rays = createSprite (500, 500);
    rays.addImage (raysimg);
    rays.visible = false;
  }

  if (res5.isTouching (weapon)){
    weapon.destroy;
    res5.changeAnimation ("res5wea");

    rays = createSprite (500, 500);
    rays.addImage (raysimg);
    rays.visible = false;
  }

  if (nan.isTouching (weapon)){
    weapon.destroy();
    nan.changeAnimation ("nanwea");

    rays = createSprite (500, 500);
    rays.addImage (raysimg);
    rays.visible = false;
  }
  
  if (vidavitor <= 188){
    frasco.visible = true;
    frasco.changeAnimation ("girando");
    frasco.velocityX = -15;
  }

  if (frasco.x < -700){
    frasco.x = 900;
  }

  if (frasco.isTouching (res1) || frasco.isTouching (res2) || frasco.isTouching (res3) || frasco.isTouching (res4)
  || frasco.isTouching (res5) || frasco.isTouching (nan)){
    resivida -= 10;
  }

  if (resivida==0){
    var lostbutton;
    lostbutton = createSprite (width/2, height/2);
    lostbutton.addImage (botaoperder);
    lostbutton.scale= 0.7;
  }

console.log(resivida);

  if (vidavitor <= 15){
    finalbu = createSprite (width/2, height/2);
    finalbu.addImage (botaofinal);
    finalbu.scale = 0.7;
    
    //var link = document.createElement("a");
    //var str = window.document.getElementById("theidofyourinput").value;
    //link.textContent = str;
    //link.href = 'http://www.google.com';
    //document.getElementsByTagName('body')[0].appendChild(link);
  }

  

  
  if (keyDown ("UP_ARROW")) {
    res1.y = solo.y-400;
    
  }
  if (res1.y < solo.y ){
    res1.y = res1.y +12
  }

  if (keyDown ("UP_ARROW")&&estad2==true) {
    res2.y = solo.y-400;
    
  }
  if (res2.y < solo.y&&estad2==true){
    res2.y = res2.y +12
  }

  if (keyDown ("UP_ARROW")&&estad3==true) {
    res3.y = solo.y-400;
    
  }
  if (res3.y < solo.y&&estad3==true){
    res3.y = res3.y +12
  }

  if (keyDown ("UP_ARROW")&&estad4==true) {
    res4.y = solo.y-400;
    
  }
  if (res4.y < solo.y&&estad4==true){
    res4.y = res4.y +12
  }

  if (keyDown ("UP_ARROW")&&estad5==true) {
    res5.y = solo.y-400;
    
  }
  if (res5.y < solo.y&&estad5==true){
    res5.y = res5.y +12
  }

  if (keyDown ("UP_ARROW")&&estadn==true) {
    nan.y = solo.y-400;
    
  }
  if (nan.y < solo.y && estadn==true){
    nan.y = nan.y +12
  }

  if (keyCode ==  70){
    window.location.href = "https://youtu.be/eCOn1l7CUSA";
  }
    

drawSprites();
}


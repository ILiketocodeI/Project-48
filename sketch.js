var character
var person

var characterNumberThree

var characterNumberTwo

var test = 0

var welcomeText = 0;

var person2
var personAnimation2

var person3
var personAnimation3

var person4
var personAnimation4

var personTwo
var personTwoAnimation

var personTwo2
var personTwoAnimation2

var personTwo3
var personTwoAnimation3

var personTwo4
var personTwoAnimation4

var person3Glitch

var enemy
var enemy2
var enemy3
var exitDoor
var celebrate
var getKeyAnimation
var deathAnimation

var personAnimation
var centerCollisionFlag = true;
var Code = 0;
var Counter = 0;
var exitCode = "";
var winningPattern = ",2,3,4,1"
var Code1Image
var Code2Image
var Code3Image
var Code4Image
var backgroundMusic
var SoundEffect

var transitionScreen1
var transitionScreen1Output
var Title1
var TitleOne
var Title2
var TitleTwo
var button1
var buttonOne
var button2
var buttonTwo
var button3
var buttonThree
var CreditsScreen
var CreditsScreenOutput

var error
var error2

var errorTwo
var errorOne
var errorThree
var wait = 10;
var waitCheck = 0;
var enemyImage
var enemyImage2
var enemyImage3

var Thing1
var Check1 = 0;
var Check2 = 1;

var Check3 = 0;
var TextThing = 0;

var lv = 0;
var alertforlv2 = 0;

var Timer20 
var Timer19
var Timer18 
var Timer17 
var Timer16 
var Timer15 
var Timer14 
var Timer13
var Timer12 
var Timer11 
var Timer10 
var Timer9 
var Timer8 
var Timer7 
var Timer6 
var Timer5 
var Timer4 
var Timer3 
var Timer2 
var Timer1 
var Timer20Img
var Timer19Img
var Timer18Img
var Timer17Img
var Timer16Img
var Timer15Img
var Timer14Img
var Timer13Img
var Timer12Img
var Timer11Img
var Timer10Img
var Timer9Img
var Timer8Img
var Timer7Img
var Timer6Img
var Timer5Img
var Timer4Img
var Timer3Img
var Timer2Img
var Timer1Img
var Timer = 0;
var GlitchAlert = 0;

var TheEnd = 0;

function preload() {

  Timer1Img = loadImage("1.png")
  Timer2Img = loadImage("2.png")
  Timer3Img = loadImage("3.png")
  Timer4Img = loadImage("4.png")
  Timer5Img = loadImage("5.png")
  Timer6Img = loadImage("6.png")
  Timer7Img = loadImage("7.png")
  Timer8Img = loadImage("8.png")
  Timer9Img = loadImage("9.png")
  Timer10Img = loadImage("10.png")
  Timer11Img = loadImage("11.png")
  Timer12Img = loadImage("12.png")
  Timer13Img = loadImage("13.png")
  Timer14Img = loadImage("14.png")
  Timer15Img = loadImage("15.png")
  Timer16Img = loadImage("16.png")
  Timer17Img = loadImage("17.png")
  Timer18Img = loadImage("18.png")
  Timer19Img = loadImage("19.png")
  Timer20Img = loadImage("20.png")

  enemyImage = loadImage("Enemy.png")
  enemyImage2 = loadImage("Enemy.png")
  enemyImage3 = loadImage("Enemy.png")

  error = loadImage("Transition1Part1.png")
  error2 = loadImage("PlayerCharacterWalkTwoTest.png")

  Title1 = loadImage("TitleOne.png")
  Title2 = loadImage("TitleTwo.png")
  button1 = loadImage("TitleButton1.png")
  button2 = loadImage("TitleButton2.png")
  button3 = loadImage("TitleButton3.png")
  CreditsScreen = loadImage("CreditsScreen.png")

  person = loadAnimation("PlayerCharacterTest.png")
  person2 = loadAnimation("PlayerCharacterWalkThreeTest.png")
  person3 = loadAnimation("PlayerCharacterWalkSixTest.png")
  person4 = loadAnimation("PlayerCharacterWalkNineTest.png")

  personTwo = loadAnimation("PlayerCharacter2Test.png")
  personTwo2 = loadAnimation("PlayerCharacter2WalkTestThree.png")
  personTwo3 = loadAnimation("PlayerCharacter2WalkTestSix.png")
  personTwo4 = loadAnimation("PlayerCharacter2WalkTestNine.png")

  person3Glitch = loadAnimation("PlayerCharacter3Test.png")
  

  // transitionScreen1 = loadAnimation("Transition1Part1.png","Transition1Part2.png",
  // "Transition1Part3.png","Transition1Part4.png","Transition1Part5.png",
  // "Transition1Part5.png","Transition1Part5.png","Transition1Part5.png",)

  personAnimation = loadAnimation("PlayerCharacterWalkTest.png", "PlayerCharacterWalkTest.png",
    "PlayerCharacterWalkTest.png", "PlayerCharacterTest.png", "PlayerCharacterTest.png",
    "PlayerCharacterTest.png", "PlayerCharacterWalkTwoTest.png", "PlayerCharacterWalkTwoTest.png",
    "PlayerCharacterWalkTwoTest.png", "PlayerCharacterTest.png", "PlayerCharacterTest.png",
    "PlayerCharacterTest.png")

  personAnimation2 = loadAnimation("PlayerCharacterWalkFourTest.png", "PlayerCharacterWalkFourTest.png",
    "PlayerCharacterWalkFourTest.png", "PlayerCharacterWalkThreeTest.png", "PlayerCharacterWalkThreeTest.png",
    "PlayerCharacterWalkThreeTest.png", "PlayerCharacterWalkFiveTest.png", "PlayerCharacterWalkFiveTest.png",
    "PlayerCharacterWalkFiveTest.png", "PlayerCharacterWalkThreeTest.png", "PlayerCharacterWalkThreeTest.png",
    "PlayerCharacterWalkThreeTest.png")

  personAnimation3 = loadAnimation("PlayerCharacterWalkSevenTest.png", "PlayerCharacterWalkSevenTest.png",
    "PlayerCharacterWalkSevenTest.png", "PlayerCharacterWalkSevenTest.png", "PlayerCharacterWalkSixTest.png",
    "PlayerCharacterWalkSixTest.png", "PlayerCharacterWalkEightTest.png", "PlayerCharacterWalkEightTest.png",
    "PlayerCharacterWalkEightTest.png", "PlayerCharacterWalkSixTest.png", "PlayerCharacterWalkSixTest.png",
    "PlayerCharacterWalkSixTest.png")

  personAnimation4 = loadAnimation("PlayerCharacterWalkTenTest.png", "PlayerCharacterWalkTenTest.png",
    "PlayerCharacterWalkTenTest.png", "PlayerCharacterWalkNineTest.png", "PlayerCharacterWalkNineTest.png",
    "PlayerCharacterWalkNineTest.png", "PlayerCharacterWalkElevenTest.png", "PlayerCharacterWalkElevenTest.png",
    "PlayerCharacterWalkElevenTest.png", "PlayerCharacterWalkNineTest.png", "PlayerCharacterWalkNineTest.png",
    "PlayerCharacterWalkNineTest.png")

  personTwoAnimation = loadAnimation("PlayerCharacter2WalkTest.png","PlayerCharacter2WalkTest.png",
  "PlayerCharacter2WalkTest.png", "PlayerCharacter2Test.png","PlayerCharacter2Test.png","PlayerCharacter2Test.png",
  "PlayerCharacter2WalkTestTwo.png","PlayerCharacter2WalkTestTwo.png","PlayerCharacter2WalkTestTwo.png",
  "PlayerCharacter2WalkTest.png","PlayerCharacter2WalkTest.png","PlayerCharacter2WalkTest.png")

  personTwoAnimation2 = loadAnimation("PlayerCharacter2WalkTestFour.png","PlayerCharacter2WalkTestFour.png",
  "PlayerCharacter2WalkTestFour.png","PlayerCharacter2WalkTestThree.png","PlayerCharacter2WalkTestThree.png",
  "PlayerCharacter2WalkTestThree.png", "PlayerCharacter2WalkTestFive.png","PlayerCharacter2WalkTestFive.png",
  "PlayerCharacter2WalkTestFive.png","PlayerCharacter2WalkTestThree.png","PlayerCharacter2WalkTestThree.png",
  "PlayerCharacter2WalkTestFour.png")

  personTwoAnimation3 = loadAnimation("PlayerCharacter2WalkTestSeven.png","PlayerCharacter2WalkTestSeven.png",
  "PlayerCharacter2WalkTestSeven.png","PlayerCharacter2WalkTestSix.png","PlayerCharacter2WalkTestSix.png",
  "PlayerCharacter2WalkTestSix.png", "PlayerCharacter2WalkTestEight.png","PlayerCharacter2WalkTestEight.png",
  "PlayerCharacter2WalkTestEight.png","PlayerCharacter2WalkTestSix.png","PlayerCharacter2WalkTestSix.png",
  "PlayerCharacter2WalkTestSix.png")

  personTwoAnimation4 = loadAnimation("PlayerCharacter2WalkTestTen.png","PlayerCharacter2WalkTestTen.png",
  "PlayerCharacter2WalkTestTen.png","PlayerCharacter2WalkTestNine.png","PlayerCharacter2WalkTestNine.png",
  "PlayerCharacter2WalkTestNine.png", "PlayerCharacter2WalkTestEleven.png","PlayerCharacter2WalkTestEleven.png",
  "PlayerCharacter2WalkTestEleven.png","PlayerCharacter2WalkTestNine.png","PlayerCharacter2WalkTestNine.png",
  "PlayerCharacter2WalkTestNine.png")


  exitDoor = loadImage("ExitDoor.png")
  celebrate = loadImage("PlayerCharacterCelebrate.png")
  deathAnimation = loadImage("PlayerCharacterDeath.png")

  Code1Image = loadImage("Code1.png")
  Code2Image = loadImage("Code2.png")
  Code3Image = loadImage("Code3.png")
  Code4Image = loadImage("Code4.png")

  backgroundMusic = loadSound("Background Music.mp3")
  SoundEffect = loadSound("Pop Sound.mp3")

}


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);




  // transitionScreen1Output = createSprite(windowWidth, windowHeight)


  //transitionScreen1Output.addAnimation("FirstTransition",transitionScreen1)

  // TitleOne = createSprite(850,100,30,30)
  // TitleOne.addImage(Title1)

  // TitleTwo = createSprite(850,200,30,30)
  // TitleTwo.addImage(Title2)
  // TitleTwo.scale = 0.5

  // buttonOne = createSprite(850,400,30,30)
  // buttonOne.addImage(button1)
  // buttonOne.scale = 0.4

  // buttonTwo = createSprite(850,500,30,30)
  // buttonTwo.addImage(button2)
  // buttonTwo.scale = 0.4

  // buttonThree = createSprite(850,600,30,30)
  // buttonThree.addImage(button3)
  // buttonThree.scale = 0.4

  // CreditsScreenOutput = createSprite(windowWidth,windowHeight);
  // CreditsScreenOutput.addImage(CreditsScreen)
  // CreditsScreenOutput.visible = false;


  //transitionScreen1Output.visible = true;

  Block1 = createSprite(683, 200, 155, 20)
  Block1.visible = false;
  Block1.shapeColor = ("black")
  Block2 = createSprite(683, 210, 155, 20)
  Block2.visible = false;
  Block2.shapeColor = ("black")
  Block3 = createSprite(683, 220, 155, 20)
  Block3.visible = false;
  Block3.shapeColor = ("black")

  backgroundMusic.play()
  backgroundMusic.setVolume(0.3)

  Code1 = createSprite(90, 250, 40, 40)
  Code1.addImage(Code1Image)
  Code1.scale = 0.2
  Code1.visible = false;
  Code2 = createSprite(330, 750, 40, 40)
  Code2.addImage(Code2Image)
  Code2.scale = 0.2
  Code2.visible = false;
  Code3 = createSprite(1000, 500, 40, 40)
  Code3.addImage(Code3Image)
  Code3.scale = 0.2
  Code3.visible = false;
  Code4 = createSprite(1580, 400, 40, 40)
  Code4.addImage(Code4Image)
  Code4.scale = 0.2
  Code4.visible = false;

  character = createSprite(100, 100, 10, 10)
  character.scale = 0.17
  character.addAnimation("Up", personAnimation)
  character.addAnimation("person", person)
  character.addAnimation("Up2", personAnimation2)
  character.addAnimation("person2", person2)
  character.addAnimation("Up3", personAnimation3)
  character.addAnimation("person3", person3)
  character.addAnimation("Up4", personAnimation4)
  character.addAnimation("person4", person4)
  characterNumberTwo = createSprite(100, 100, 10, 10)
  characterNumberTwo.scale = 0.17
  characterNumberTwo.visible = false;
  characterNumberTwo.setCollider("rectangle",10000,10000,0,0)
  characterNumberTwo.addAnimation("Up5", personTwoAnimation)
  characterNumberTwo.addAnimation("personTwo", personTwo)
  characterNumberTwo.addAnimation("Up6", personTwoAnimation2)
  characterNumberTwo.addAnimation("personTwo2", personTwo2)
  characterNumberTwo.addAnimation("Up7", personTwoAnimation3)
  characterNumberTwo.addAnimation("personTwo3", personTwo3)
  characterNumberTwo.addAnimation("Up8", personTwoAnimation4)
  characterNumberTwo.addAnimation("personTwo4", personTwo4)

  characterNumberThree = createSprite(500, 500, 10, 10)
  characterNumberThree.scale = 0.17
  characterNumberThree.visible = false;
  characterNumberThree.setCollider("rectangle",10000,10000,0,0)
  characterNumberThree.addAnimation("YES", person3Glitch)
  


  character.changeAnimation("person", person)

  character.setCollider("rectangle", 0, 0, 200, 400)


  wall1 = createSprite(140, 150, 20, 500)
  wall1.shapeColor = ("green")


  wall2 = createSprite(50, 150, 20, 1300)
  wall2.shapeColor = ("green")


  wall3 = createSprite(380, 390, 500, 20)
  wall3.shapeColor = ("green")


  wall4 = createSprite(380, 490, 500, 20)
  wall4.shapeColor = ("green")


  wall5 = createSprite(140, 590, 20, 200)
  wall5.shapeColor = ("green")


  wall6 = createSprite(380, 690, 500, 20)
  wall6.shapeColor = ("green")


  wall7 = createSprite(340, 790, 580, 20)
  wall7.shapeColor = ("green")


  wall8 = createSprite(620, 300, 20, 160)
  wall8.shapeColor = ("green")


  wall9 = createSprite(450, 230, 350, 20)
  wall9.shapeColor = ("green")


  wall10 = createSprite(285, 160, 20, 140)
  wall10.shapeColor = ("green")


  wall11 = createSprite(450, 100, 350, 20)
  wall11.shapeColor = ("green")


  wall12 = createSprite(620, 600, 20, 200)
  wall12.shapeColor = ("green")


  wall13 = createSprite(615, 52, 20, 105)
  wall13.shapeColor = ("green")


  wall14 = createSprite(750, 52, 20, 105)
  wall14.shapeColor = ("green")


  wall15 = createSprite(915, 100, 350, 20)
  wall15.shapeColor = ("green")


  wall16 = createSprite(683, 100, 155, 20)
  wall16.shapeColor = ("black")


  wall17 = createSprite(1300, 100, 700, 20)
  wall17.shapeColor = ("green")


  wall18 = createSprite(1640, 300, 20, 400)
  wall18.shapeColor = ("green")


  wall19 = createSprite(1300, 230, 400, 20)
  wall19.shapeColor = ("green")


  wall20 = createSprite(1640, 600, 20, 400)
  wall20.shapeColor = ("green")


  wall21 = createSprite(1500, 420, 20, 400)
  wall21.shapeColor = ("green")


  wall22 = createSprite(1100, 420, 20, 400)
  wall22.shapeColor = ("green")


  wall23 = createSprite(1300, 610, 400, 20)
  wall23.shapeColor = ("green")


  wall24 = createSprite(1130, 790, 1020, 20)
  wall24.shapeColor = ("green")



  generator = createSprite(850, 450, 50, 50)
  generator.shapeColor = ("grey")

  wall16barrier = createSprite(683, 101, 170, 20)
  wall16barrier.visible = false;

  button1 = createSprite(10000, 10000, 40, 40)
  button1.shapeColor = ("blue")
  button1.visible = false;

  button2 = createSprite(10000, 10000, 40, 40)
  button2.shapeColor = ("blue")
  button2.visible = false;

  button3 = createSprite(10000, 10000, 40, 40)
  button3.shapeColor = ("blue")
  button3.visible = false;

  button4 = createSprite(10000, 10000, 40, 40)
  button4.shapeColor = ("blue")
  button4.visible = false;

  lazer1 = createSprite(1450, 420, 20, 360)
  lazer1.shapeColor = ("red")
  lazer1.visible = false;

  lazer2 = createSprite(1400, 420, 20, 360)
  lazer2.shapeColor = ("red")
  lazer2.visible = false;

  lazer3 = createSprite(1350, 420, 20, 360)
  lazer3.shapeColor = ("red")
  lazer3.visible = false;

  lazer4 = createSprite(1300, 420, 20, 360)
  lazer4.shapeColor = ("red")
  lazer4.visible = false;

  enemy = createSprite(680, 420, 30, 50)
  enemy.setCollider("rectangle", 10000, 10000, 200, 200)
  enemy.addImage(enemyImage)
  enemy.scale = 0.3;
  enemy.visible = false;

  enemy2 = createSprite(1000, 200, 30, 50)
  enemy2.setCollider("rectangle", 10000, 10000, 200, 200)
  enemy2.addImage(enemyImage2)
  enemy2.scale = 0.3;
  enemy2.visible = false;

  enemy3 = createSprite(1300, 700, 100, 100)
  enemy3.setCollider("rectangle", 10000, 10000, 200, 200)
  enemy3.addImage(enemyImage3)
  enemy3.scale = 0.3;
  enemy3.visible = false;



  CollisionPoint1 = createSprite(450, 165, 20, 20)
  CollisionPoint1.visible = false;
  CollisionPoint2 = createSprite(600, 165, 20, 20)
  CollisionPoint2.visible = false;



  CodeInput1 = createSprite(1150, 300, 50, 50)
  CodeInput1.shapeColor = ("red")
  CodeInput2 = createSprite(1220, 300, 50, 50)
  CodeInput2.shapeColor = ("yellow")
  CodeInput3 = createSprite(1150, 550, 50, 50)
  CodeInput3.shapeColor = ("purple")
  CodeInput4 = createSprite(1220, 550, 50, 50)
  CodeInput4.shapeColor = ("orange")

  CodeInput1.visible = false;
  CodeInput2.visible = false;
  CodeInput3.visible = false;
  CodeInput4.visible = false;



  exitCollideBlock = createSprite(683, 200, 155, 20)
  exitCollideBlock.shapeColor = ("red")
  exitCollideBlock.visible = false;

  Thing1 = createSprite(100, 100, 30, 30)
  Thing1.visible = false;
  Thing1.setCollider("rectangle", 10000, 10000, 0, 0)

  WelcomeTextSprite = createSprite(100, 110, 40, 40)
  WelcomeTextSprite.visible = false;

  wall25 = createSprite(180, 330, 20, 150)
  wall25.shapeColor = ("yellow")
  wall25.visible = false;

  wall26 = createSprite(300, 330, 20, 150)
  wall26.shapeColor = ("yellow")
  wall26.visible = false;

  wall27 = createSprite(240, 400, 140, 20)
  wall27.shapeColor = ("yellow")
  wall27.visible = false;

  wall28 = createSprite(240, 250, 140, 20)
  wall28.shapeColor = ("yellow")
  wall28.visible = false;

  exitCollideBlock = createSprite(683, 30, 155, 20)
  exitCollideBlock.visible = false;

  errorTwo = createSprite(1200, 500, 100, 100)
 errorTwo.addImage(error2)
 errorOne = createSprite(300, 400, 300, 400)
 errorOne.addImage(error)
 errorTwo.visible = false;
 errorOne.visible = false;
 errorTwo.setCollider("rectangle",10000,10000,0,0)

 wall29 = createSprite(300,600,20,400)
 wall29.shapeColor = ("yellow")
 wall29.visible = false;
 wall29.setCollider("rectangle",10000,10000,0,0)

 wall30 = createSprite(860,790,1100,20)
 wall30.shapeColor = ("yellow")
 wall30.visible = false;
 wall30.setCollider("rectangle",10000,10000,0,0)
 wall31 = createSprite(1400,520,20,530)
 wall31.shapeColor = ("yellow")
 wall31.visible = false;
 wall31.setCollider("rectangle",10000,10000,0,0)
 wall32 = createSprite(860,250,1100,20)
 wall32.shapeColor = ("yellow")
 wall32.visible = false;
 wall32.setCollider("rectangle",10000,10000,0,0)

 Timer20 = createSprite(800,150,20,20)
 Timer20.addImage(Timer20Img)
 Timer20.visible = false;
 Timer20.scale = 0.4

 Timer19 = createSprite(800,150,100,100)
 Timer19.addImage(Timer19Img)
 Timer19.visible = false;
 Timer19.setCollider("rectangle",10000,10000,0,0)
 Timer19.scale = 0.4

Timer18 = createSprite(800,150,100,100)
 Timer18.addImage(Timer18Img)
 Timer18.visible = false;
 Timer18.setCollider("rectangle",10000,10000,0,0)
 Timer18.scale = 0.4

 Timer17 = createSprite(800,150,100,100)
 Timer17.addImage(Timer17Img)
 Timer17.visible = false;
 Timer17.setCollider("rectangle",10000,10000,0,0)
 Timer17.scale = 0.4

 Timer16 = createSprite(800,150,100,100)
 Timer16.addImage(Timer16Img)
 Timer16.visible = false;
 Timer16.setCollider("rectangle",10000,10000,0,0)
 Timer16.scale = 0.4

 Timer15 = createSprite(800,150,100,100)
 Timer15.addImage(Timer15Img)
 Timer15.visible = false;
 Timer15.setCollider("rectangle",10000,10000,0,0)
 Timer15.scale = 0.4

 Timer14 = createSprite(800,150,100,100)
 Timer14.addImage(Timer14Img)
 Timer14.visible = false;
 Timer14.setCollider("rectangle",10000,10000,0,0)
 Timer14.scale = 0.4

 Timer13 = createSprite(800,150,100,100)
 Timer13.addImage(Timer13Img)
 Timer13.visible = false;
 Timer13.setCollider("rectangle",10000,10000,0,0)
 Timer13.scale = 0.4

 Timer12 = createSprite(800,150,100,100)
 Timer12.addImage(Timer12Img)
 Timer12.visible = false;
 Timer12.setCollider("rectangle",10000,10000,0,0)
 Timer12.scale = 0.4

 Timer11 = createSprite(800,150,100,100)
 Timer11.addImage(Timer11Img)
 Timer11.visible = false;
 Timer11.setCollider("rectangle",10000,10000,0,0)
 Timer11.scale = 0.4

 Timer10 = createSprite(800,150,100,100)
 Timer10.addImage(Timer10Img)
 Timer10.visible = false;
 Timer10.setCollider("rectangle",10000,10000,0,0)
 Timer10.scale = 0.4

 Timer9 = createSprite(800,150,100,100)
 Timer9.addImage(Timer9Img)
 Timer9.visible = false;
 Timer9.setCollider("rectangle",10000,10000,0,0)
 Timer9.scale = 0.4

 Timer8 = createSprite(800,150,100,100)
 Timer8.addImage(Timer8Img)
 Timer8.visible = false;
 Timer8.setCollider("rectangle",10000,10000,0,0)
 Timer8.scale = 0.4

 Timer7 = createSprite(800,150,100,100)
 Timer7.addImage(Timer7Img)
 Timer7.visible = false;
 Timer7.setCollider("rectangle",10000,10000,0,0)
 Timer7.scale = 0.4

 Timer6 = createSprite(800,150,100,100)
 Timer6.addImage(Timer6Img)
 Timer6.visible = false;
 Timer6.setCollider("rectangle",10000,10000,0,0)
 Timer6.scale = 0.4

 Timer5 = createSprite(800,150,100,100)
 Timer5.addImage(Timer5Img)
 Timer5.visible = false;
 Timer5.setCollider("rectangle",10000,10000,0,0)
 Timer5.scale = 0.4

 Timer4 = createSprite(800,150,100,100)
 Timer4.addImage(Timer4Img)
 Timer4.visible = false;
 Timer4.setCollider("rectangle",10000,10000,0,0)
 Timer4.scale = 0.4

 Timer3 = createSprite(800,150,100,100)
 Timer3.addImage(Timer3Img)
 Timer3.visible = false;
 Timer3.setCollider("rectangle",10000,10000,0,0)
 Timer3.scale = 0.4

 Timer2 = createSprite(800,150,100,100)
 Timer2.addImage(Timer2Img)
 Timer2.visible = false;
 Timer2.setCollider("rectangle",10000,10000,0,0)
 Timer2.scale = 0.4

 Timer1 = createSprite(800,150,100,100)
 Timer1.addImage(Timer1Img)
 Timer1.visible = false;
 Timer1.setCollider("rectangle",10000,10000,0,0)
 Timer1.scale = 0.4

 Box1 = createSprite(500,400,20,20)
 Box1.visible = false;
 

 

}





function draw() {

  background("white")




  //TitleOne.addImage(Title1)
  if (lv == 0){
    character.changeAnimation("person", person)
  }
  if (lv == 1){
  characterNumberTwo.changeAnimation("personTwo", personTwo)
  }
  if (lv == 2){
    characterNumberThree.changeAnimation("YES",person3Glitch)
  }
 
  if (keyDown("up")) {
    if (lv == 0){
      character.position.y -= 4
      character.changeAnimation("Up2", personAnimation2)
    }
    if (lv == 1){
      characterNumberTwo.position.y -=4
      characterNumberTwo.changeAnimation("Up6", personTwoAnimation2)
    }

    if (lv == 2){
      characterNumberThree.changeAnimation("YES",person3Glitch)
    }

  } else if (keyDown("down")) {
    if (lv == 0){
      welcomeText++
      character.position.y += 4
      character.changeAnimation("Up", personAnimation2)
    }
    if (lv == 1){
      characterNumberTwo.position.y +=4
      characterNumberTwo.changeAnimation("Up5", personTwoAnimation2)
    }

    if (lv == 2){
      characterNumberThree.changeAnimation("YES",person3Glitch)
    }
   
  }

  if (keyDown("left")) {
    if (lv == 0){
      character.position.x -= 4
      character.changeAnimation("Up3", personAnimation3)
    }
    if (lv == 1){
      characterNumberTwo.position.x -= 4
      characterNumberTwo.changeAnimation("Up7", personTwoAnimation3)
    }
    if (lv ==2){
      characterNumberThree.changeAnimation("YES",person3Glitch)
    }
    
  } else if (keyDown("right")) {
    if (lv == 0){
      character.position.x += 4
      character.changeAnimation("Up4", personAnimation4)
    }
    if (lv == 1){
      characterNumberTwo.position.x += 4
      characterNumberTwo.changeAnimation("Up8", personTwoAnimation3)
    }
    if (lv ==2){
      characterNumberThree.changeAnimation("YES",person3Glitch)
    }
  
  }
  if (welcomeText == 1){
    alert("Welcome!")
    welcomeText++
  }

  // characterNumberTwo.setCollider("rectangle",10000,10000,0,0)
  // characterNumberTwo.addAnimation("Up5", personTwoAnimation)
  // characterNumberTwo.addAnimation("personTwo", personTwo)
  // characterNumberTwo.addAnimation("Up6", personTwoAnimation2)
  // characterNumberTwo.addAnimation("personTwo2", personTwo2)
  // characterNumberTwo.addAnimation("Up7", personTwoAnimation3)
  // characterNumberTwo.addAnimation("personTwo3", personTwo3)
  // characterNumberTwo.addAnimation("Up8", personTwoAnimation4)
  // characterNumberTwo.addAnimation("personTwo4", personTwo4)
  character.collide(wall1)
  character.collide(wall2)
  character.collide(wall3)
  character.collide(wall4)
  character.collide(wall5)
  character.collide(wall6)
  character.collide(wall7)
  character.collide(wall8)
  character.collide(wall9)
  character.collide(wall10)
  character.collide(wall11)
  character.collide(wall12)
  character.collide(wall13)
  character.collide(wall14)
  character.collide(wall15)
  character.collide(wall16)
  character.collide(wall17)
  character.collide(wall18)
  character.collide(wall19)
  character.collide(wall20)
  character.collide(wall21)
  character.collide(wall22)
  character.collide(wall23)
  character.collide(wall24)



  character.collide(enemy)
  character.collide(enemy2)
  character.collide(enemy3)


  character.collide(lazer1)
  character.collide(lazer2)
  character.collide(lazer3)
  character.collide(lazer4)


  characterNumberTwo.collide(wall25)
  characterNumberTwo.collide(wall26)
  characterNumberTwo.collide(wall27)
  characterNumberTwo.collide(wall28)
  characterNumberTwo.collide(wall29)
  characterNumberTwo.collide(wall30)
  characterNumberTwo.collide(wall31)
  characterNumberTwo.collide(wall32)




  // if (TitleOne.visible = true){
  //   wall1.visible = false;
  //   wall2.visible = false;
  //   wall3.visible = false;
  //   wall4.visible = false;
  //   wall5.visible = false;
  //   wall6.visible = false;
  //   wall7.visible = false;
  //   wall8.visible = false;
  //   wall9.visible = false;
  //   wall10.visible = false;
  //   wall11.visible = false;
  //   wall12.visible = false;
  //   wall13.visible = false;
  //   wall14.visible = false;
  //   wall15.visible = false;
  //   wall16.visible = false;
  //   wall17.visible = false;
  //   wall18.visible = false;
  //   wall19.visible = false;
  //   wall20.visible = false;
  //   wall21.visible = false;
  //   wall22.visible = false;
  //   wall23.visible = false;
  //   wall24.visible = false;

  //   character.visible = false;

  //   generator.visible = false;
  // }

  // if (mousePressed(button2)){
  //   background(CreditsScreen)
  // }


  if (alertforlv2 == 1){
    alert("Um...Uh, welcome!")
    alert("Everything is normal...Uh, so anyways...")
    alert("This will be like a test for you...yeah, a test.")
    alert("All I can say is, good luck...I guess...")
   
    
    wall25.visible = true;
    wall26.visible = false;
    wall27.visible = true;
    wall28.visible = true;
    wall29.visible = true;
    wall30.visible = true;
    wall31.visible = true;
    wall32.visible = true;

    wall29.setCollider("rectangle",0,0,0,0)
    wall30.setCollider("rectangle",0,0,0,0)
    wall31.setCollider("rectangle",0,0,0,0)
    wall32.setCollider("rectangle",0,0,0,0)

    alertforlv2++
    if (characterNumberTwo.position.x >380){
      wall25.visible = false;
      wall25.setCollider("rectangle",10000,10000,0,0)
      wall25.remove()

      wall28.visible = false;
      wall28.setCollider("rectangle",10000,10000,0,0)
      wall28.remove()

      wall27.visible = false;
      wall27.setCollider("rectangle",10000,10000,0,0)
      wall27.remove()

      if (characterNumberTwo.collide(Box1)){
        GlitchAlert++
      }
    }
    Timer20.visible = true;
    Box1.visible = true;
  }
  
  if (Timer == 1){
    Timer20.remove()


  }
  if (GlitchAlert == 1){
    alert("Wait...")
    alert("Why is the level broken??")
    alert("That's it!")
    alert("I'm not letting you win!")
    wall25.remove()
    wall26.remove()
    wall27.remove()
    wall28.remove()
    wall29.remove()
    wall30.remove()
    wall31.remove()
    wall32.remove()
    characterNumberTwo.visible = false;
    characterNumberTwo.setCollider("rectangle",10000,10000,0,0)
    characterNumberTwo.remove()
    characterNumberThree.visible = true;
    characterNumberThree.setCollider("rectangle",0,0,0,0)
    lv++

  }

  if (character.collide(wall16barrier)) {
    character.position.y += 20

  }

  if (character.collide(generator)) {
    SoundEffect.play()
    generator.position.x = windowWidth + 200
    generator.remove()
    centerCollisionFlag = false;

    button1.visible = true;
    button1.position.x = 100
    button1.position.y = 750

    button2.visible = true;
    button2.position.x = 330
    button2.position.y = 170

    button3.visible = true;
    button3.position.x = 1590
    button3.position.y = 150

    button4.visible = true;
    button4.position.x = 1590
    button4.position.y = 750

    wall21.visible = false;
    wall21.setCollider("rectangle", 10000, 0, 0, 0)

    lazer1.visible = true;
    lazer2.visible = true;
    lazer3.visible = true;
    lazer4.visible = true;

    CodeInput1.visible = true;
    CodeInput2.visible = true;
    CodeInput3.visible = true;
    CodeInput4.visible = true;


    enemy.visible = true;
    enemy2.visible = true;
    enemy3.visible = true;

    alert("Uh oh! Enemies!")

    enemy.setCollider("rectangle", 0, 0, 190, 200)
    enemy2.setCollider("rectangle", 0, 0, 200, 200)
    enemy3.setCollider("rectangle", 0, 0, 200, 200)


    character.position.x = 100
    character.position.y = 100



    alert("Well, I guess it's the end for you! No need to hit any buttons!")




  }





  if (centerCollisionFlag) {

    text("𝑺𝒑𝒂𝒘𝒏 𝑩𝒖𝒕𝒕𝒐𝒏𝒔", 810, 400)
    text("▼", 845, 415)
  }

  



  if (character.collide(button1)) {

    SoundEffect.play()
    button1.setCollider("rectangle", 10000, 0, 0, 0)
    button1.position = windowWidth + 100
    button1.visible = false;
    lazer1.setCollider("rectangle", 10000, 0, 0, 0)
    lazer1.remove()


    Code++
    alert("Just what do you think you're doing...?")

    enemy.position.x = 1580
    enemy.position.y = 220
    enemy2.position.x = 630
    enemy2.position.y = 170
    enemy3.position.x = 1500
    enemy3.position.y = 175


  }


  if (character.collide(button2)) {
    SoundEffect.play()
    button2.setCollider("rectangle", 10000, 0, 0, 0)
    button2.position = windowWidth + 100
    button2.visible = false;
    lazer2.setCollider("rectangle", 10000, 0, 0, 0)
    lazer2.remove()


    Code++
    alert("Do you think this is funny? Or entertaining? Well it isn't. You're not going to accomplish anything.")

    enemy.position.x = 1580
    enemy.position.y = 220
    enemy2.position.x = 800
    enemy2.position.y = 170
    enemy3.position.x = 700
    enemy3.position.y = 700

  }

  if (character.collide(button3)) {
    SoundEffect.play()
    button3.setCollider("rectangle", 10000, 0, 0, 0)
    button3.position = windowWidth + 100
    button3.visible = false;
    lazer3.setCollider("rectangle", 10000, 0, 0, 0)
    lazer3.remove()


    Code++

    alert("This is the last straw. Stop doing what you're doing, or else...")

    enemy.position.x = 1580
    enemy.position.y = 220
    enemy2.position.x = 800
    enemy2.position.y = 170
    enemy3.position.x = 700
    enemy3.position.y = 700

  }

  if (character.collide(button4)) {
    SoundEffect.play()
    button4.setCollider("rectangle", 10000, 0, 0, 0)
    button4.position = windowWidth + 100
    button4.visible = false;
    lazer4.setCollider("rectangle", 10000, 0, 0, 0)

    lazer4.remove()


    Code++
    alert("Seriously, stop.")

    enemy.position.x = 1580
    enemy.position.y = 220
    enemy2.position.x = 680
    enemy2.position.y = 250
    enemy3.position.x = 1500
    enemy3.position.y = 175
  }


  if (character.collide(CodeInput1)) {
    SoundEffect.play()
    CodeInput1.setCollider("rectangle", 10000, 0, 0, 0)
    CodeInput1.remove()
    exitCode = exitCode + ",1"

    Counter++
    alert("...")
  }

  if (character.collide(CodeInput2)) {
    SoundEffect.play()
    CodeInput2.setCollider("rectangle", 10000, 0, 0, 0)
    CodeInput2.remove()
    exitCode = exitCode + ",2"
    Counter++
    alert("...")
  }

  if (character.collide(CodeInput3)) {
    SoundEffect.play()
    CodeInput3.setCollider("rectangle", 10000, 0, 0, 0)
    CodeInput3.remove()
    exitCode = exitCode + ",3"
    Counter++
    alert("...")
  }

  if (character.collide(CodeInput4)) {
    SoundEffect.play()
    CodeInput4.setCollider("rectangle", 10000, 0, 0, 0)
    CodeInput4.remove()
    exitCode = exitCode + ",4"
    Counter++
    alert("...")
  }
  if (Check3 == 2){
    character.visible = false;
    character.remove()
    characterNumberTwo.setCollider("rectangle",0,0,0,0)
    characterNumberTwo.visible = true;
    characterNumberTwo.position.x = 220
    characterNumberTwo.position.y = 330
        lv++  
        alertforlv2++

          errorTwo.visible = false;
          errorOne.visible = false;
          errorTwo.setCollider("rectangle",10000,10000,0,0)
          errorOne.setCollider("rectangle",10000,10000,0,0)
          errorTwo.remove()
          errorOne.remove()
          
         wall25.visible = true;
         wall25.setCollider("rectangle",0,0,0,0)
         wall26.visible = true;
         wall26.setCollider("rectangle",0,0,0,0)
         wall27.visible = true;
         wall27.setCollider("rectangle",0,0,0,0)
         wall28.visible = true;
         wall28.setCollider("rectangle",0,0,0,0)
          Block1.visible = false;
          Block2.visible = false;
          Block3.visible = false;
          Block1.setCollider("rectangle",10000,10000,0,0)
          Block2.setCollider("rectangle",10000,10000,0,0)
          Block3.setCollider("rectangle",10000,10000,0,0)
          Block1.remove()
          Block2.remove()
          Block3.remove()
          Check3++
          }

  if (Counter == 4) {

    if (exitCode == winningPattern) {

      Check1++
      Code1.visible = false;
      Code2.visible = false;
      Code3.visible = false;
      Code4.visible = false;
      Code1.remove()
      Code2.remove()
      Code3.remove()
      Code4.remove()
      wall16.setCollider("rectangle", 10000, 0, 0, 0)
      wall16.remove()
      wall16barrier.setCollider("rectangle", 10000, 0, 0, 0)
      wall16barrier.remove()
      enemy.visible = false;
      enemy2.visible = false;
      enemy3.visible = false;
      enemy.setCollider("rectangle",10000,10000,0,0)
      enemy2.setCollider("rectangle",10000,10000,0,0)
      enemy3.setCollider("rectangle",10000,10000,0,0)
      enemy.remove()
      enemy2.remove()
      enemy3.remove()

      button1.remove()
      button2.remove()
      button3.remove()
      button4.remove()
    }

    if (exitCode !== winningPattern) {
      alert("Hah, I knew you couldn't do it!")
    }

    if (Check1 == 1) {
      alert(".....")
      alert("WAIT...YOU ACTUALLY DID IT!?")
      alert("NO, WAIT! DON'T ESCAPE!")
      Check1++
    }

if (TheEnd == 1){
  alert("You Beat the Game!")
  TheEnd++
}

    if (exitCollideBlock.collide(character)) {
     
      character.position.y -= 15

      // Block1.visible = true;
      // Block2.visible = true;
      // Block3.visible = true;


      // waitCheck++


      if (character.position.y < 50) {
      

        // errorOne.visible = true;
        // errorTwo.visible = true;

        enemy.visible = false;
        enemy2.visible = false;
        enemy3.visible = false;
        enemy.remove()
        enemy2.remove()
        enemy3.remove()
        enemy.setCollider("rectangle", 10000, 10000, 0, 0)
        enemy2.setCollider("rectangle", 10000, 10000, 0, 0)
        enemy3.setCollider("rectangle", 10000, 10000, 0, 0)

        generator.setCollider("rectangle", 10000, 0, 0, 0)

        wall1.visible = false;
        wall2.visible = false;
        wall3.visible = false;
        wall4.visible = false;
        wall5.visible = false;
        wall6.visible = false;
        wall7.visible = false;
        wall8.visible = false;
        wall9.visible = false;
        wall10.visible = false;
        wall11.visible = false;
        wall12.visible = false;
        wall13.visible = false;
        wall14.visible = false;
        wall15.visible = false;
        wall16.visible = false;
        wall17.visible = false;
        wall18.visible = false;
        wall19.visible = false;
        wall20.visible = false;
        wall21.visible = false;
        wall22.visible = false;
        wall23.visible = false;
        wall24.visible = false;

        character.visible = false;

        generator.visible = false;




        wall1.setCollider("rectangle", 10000, 0, 0, 0)
        wall2.setCollider("rectangle", 10000, 0, 0, 0)
        wall3.setCollider("rectangle", 10000, 0, 0, 0)
        wall4.setCollider("rectangle", 10000, 0, 0, 0)
        wall5.setCollider("rectangle", 10000, 0, 0, 0)
        wall6.setCollider("rectangle", 10000, 0, 0, 0)
        wall7.setCollider("rectangle", 10000, 0, 0, 0)
        wall8.setCollider("rectangle", 10000, 0, 0, 0)
        wall9.setCollider("rectangle", 10000, 0, 0, 0)
        wall10.setCollider("rectangle", 10000, 0, 0, 0)
        wall11.setCollider("rectangle", 10000, 0, 0, 0)
        wall12.setCollider("rectangle", 10000, 0, 0, 0)
        wall13.setCollider("rectangle", 10000, 0, 0, 0)
        wall14.setCollider("rectangle", 10000, 0, 0, 0)
        wall15.setCollider("rectangle", 10000, 0, 0, 0)
        wall16.setCollider("rectangle", 10000, 0, 0, 0)
        wall17.setCollider("rectangle", 10000, 0, 0, 0)
        wall18.setCollider("rectangle", 10000, 0, 0, 0)
        wall19.setCollider("rectangle", 10000, 0, 0, 0)
        wall20.setCollider("rectangle", 10000, 0, 0, 0)
        wall21.setCollider("rectangle", 10000, 0, 0, 0)
        wall22.setCollider("rectangle", 10000, 0, 0, 0)
        wall23.setCollider("rectangle", 10000, 0, 0, 0)
        wall24.setCollider("rectangle", 10000, 0, 0, 0)

        wall1.remove()
        wall2.remove()
        wall3.remove()
        wall4.remove()
        wall5.remove()
        wall6.remove()
        wall7.remove()
        wall8.remove()
        wall9.remove()
        wall10.remove()
        wall11.remove()
        wall12.remove()
        wall13.remove()
        wall14.remove()
        wall15.remove()
        wall16.remove()
        wall17.remove()
        wall18.remove()
        wall19.remove()
        wall20.remove()
        wall21.remove()
        wall22.remove()
        wall23.remove()
        wall24.remove()

        TheEnd++
        // Check3++

        // if (TextThing == 0 && errorTwo.visible && errorOne.visible) {
        //   alert("Error 404 Character Not Found")
        //   TextThing++
        //   Check3++

        // }
      
      
     
        




      }




    }




  }





  drawSprites()

}


// function invertVelocity(spriteA,spriteB){
//   spriteB.velocity.x = -spriteB.velocity.x 
//    spriteB.velocity.y = -spriteB.velocity.y
//   //  if (spriteB.collide(wall9)){
//   //    spriteB.velocity.x = spriteB.velocity.x + 3
//   //    spriteB.velocity.y = spriteB.velocity.y + 3
//   //  }
// }



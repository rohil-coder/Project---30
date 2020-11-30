class Polygon extends Block {
  constructor(x,y){
    super(x,y,50,50);
    polygon = Bodies.circle(50, 200, 20);
    World.add(world, polygon);
    this.image = loadImage("polygon.png");
    imageMode(CENTER)
    image(polygon_img, polygon.position.x, polygon.position.y, 40, 40);
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
  }
}

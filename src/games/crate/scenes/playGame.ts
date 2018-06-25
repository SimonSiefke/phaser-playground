export class CrateScene extends Phaser.Scene {
  private crate1
  private crate2
  private crate3
  public preload() {
    this.load.image('crate', '../../assets/crate.png')
  }

  public create() {
    this.crate1 = this.physics.add.sprite(250, 450, 'crate')
    this.crate1.body.velocity.x = 100
    this.crate1.body.collideWorldBounds = true
    this.crate1.body.bounce.setTo(1, 0.5)

    this.crate2 = this.physics.add.sprite(250, 750, 'crate')
    this.crate2.body.velocity.x = 170
    this.crate2.body.collideWorldBounds = true
    this.crate2.body.bounce.setTo(1, 1.1)

    this.crate3 = this.physics.add.sprite(50, 250, 'crate')
    this.crate3.body.velocity.x = 170
    this.crate3.body.collideWorldBounds = true
    this.crate3.body.bounce.setTo(1, 1)

    // @ts-ignore
    this.physics.add.collider(this.crate1, this.crate2)
    // @ts-ignore
    this.physics.add.collider(this.crate2, this.crate3)
    // @ts-ignore
    this.physics.add.collider(this.crate1, this.crate3)
  }
}

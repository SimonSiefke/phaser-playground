import * as Phaser from 'phaser'

export class CrateScene extends Phaser.Scene {
  private right
  private bottom
  private left
  private crate3
  public preload() {
    this.load.image('crate', '../../assets/crate.png')
  }

  public create() {
    this.right = this.physics.add.sprite(706, 250, 'crate').setScale(0.1, 10)
    this.right.body.allowGravity = false
    this.right.body.immovable = true

    this.bottom = this.physics.add.sprite(400, 550, 'crate').setScale(10, 0.1)
    this.bottom.body.allowGravity = false
    this.bottom.body.immovable = true

    this.left = this.physics.add.sprite(50, 250, 'crate').setScale(0.1, 10)
    this.left.body.allowGravity = false
    this.left.body.immovable = true

    this.crate3 = this.physics.add.sprite(50, 250, 'crate')
    this.crate3.body.velocity.x = 300
    // this.crate3.body.collideWorldBounds = true
    this.crate3.body.bounce.setTo(1, 1)

    // @ts-ignore
    this.physics.add.collider(this.right, this.bottom)
    // @ts-ignore
    this.physics.add.collider(this.bottom, this.crate3)
    // @ts-ignore
    this.physics.add.collider(this.right, this.crate3)

    // @ts-ignore
    this.physics.add.collider(this.left, this.crate3)

    this.cameras.main.startFollow(this.crate3)
    this.cameras.main.setBounds(0, 0, 1500, 576)
  }
}

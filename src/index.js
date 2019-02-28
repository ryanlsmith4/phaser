// Following this link https://www.youtube.com/watch?v=GUZ8SsLQKUs&list=PLoN_ejT
// 35AEhY4icjiEJ5t2qdunwmQj1R


import 'phaser';

var config = {
    type: Phaser.AUTO,
    parent: 'phasnpmer-example',
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('logo', 'assets/logo.png');
}

function create ()
{
    var logo = this.add.image(400, 150, 'logo');

    this.tweens.add({
        targets: logo,
        y: 450,
        duration: 2000,
        ease: 'Power2',
        yoyo: true,
        loop: -1
    });

}

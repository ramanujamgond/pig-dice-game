# Pig-Dice-Game


![screencapture-file-home-string1301-code_den-pig-dice-game-index-html-2018-11-18-18_45_55](https://user-images.githubusercontent.com/8182687/48672938-4747a480-eb62-11e8-9bb1-75892e2e4305.png)


A simple game, played with one die, which requires a score sheet. Each player in turn throws the die and continues to throw the die until either a 1 is thrown or they decide to stop.  If a 1 is thrown they score nothing for that turn.  If they elect to stop before a 1 is thrown they score the total of the numbers thrown in that turn.  The scores are noted for each turn and the player who obtains a total score over 100, wins the game, provided they are not then out-scored by a subsequent player who has thrown one fewer rolls and still has a turn left.


### Installation

Download or clone the repository in your machine and start the game by opening index.html page in your desired browser.

```sh
$ git clone https://github.com/ramanujamgond/pig-dice-game.git
$ cd pig-dice-game
```


# How to Play !

  - The game has 2 players, playing in rounds.
  - In each turn, a player rolls a dice as many times as he/she whishes. Each result gets added to his/her **Total** score.
  - BUT, if the player rolls a 1, or two consecutive 6 are rolls in a row than all his/her **Total** score gets lost. After that, it's the next player's turn.
  - The player can choose to 'Hold', which means that his/her **Total** score gets added to his/her **Final** score. After that, it's the next player's turn.
  - The first player to reach 100 points on **Final** score wins the game.
  - Players can also **set a winning score** at any point of the game.
  - **_Default winning score is 100._**


License
----

MIT


**Source** - [Jonas Schmedtmann]: <https://github.com/jonasschmedtmann>

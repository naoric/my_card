number =43
number = -42 if 2 > 1

square = (x) -> x*x

math =
  root: Math.sqrt
  square: square
  cube: (x) -> x * square x
  
race = (winner, runners...) ->
  print winner, runners

list = [1..10]

cubes = (math.cube num for num in list)

useDefault = (item = "default") ->
  "using the default parameter which is: #{item}"

if happy and knowIt
  clapHands()
  chaChaCha()
else
  showIt()

print "something" if 2 isnt 3

twotimes = (num * 2 for num in [2..8])

solipism = true if mind? and not world?
speed = 0
speed ?= 13

footprints = yeti ? "bear"

zip = lottery.drawWinner?().address?.zipcode
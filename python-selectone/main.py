from time import sleep
import os
import keyboard

class SelectOne():
	def __init__(self, arg):
		self.arg = arg
		self.cursor = 0
		self.colors = {
			'black' : 30,
			'white' : 37,
		}
		self.bgcolors = {
			'black' : 40,
			'white' : 47,
		}
		self.keys = {
			'up' : 72,
			'down' : 80,
			'left' : 74,
			'right' : 76
		}

		self.argChk()
		
		return

	def argChk(self):
		if(isinstance(self.arg, list)):
			self.labels = self.arg
			self.cursorMax = len(self.labels) - 1
			# self.color = self.colors['black']
			# self.bgcolor = self.bgcolors['white']
			return

		#axis : x, y

	# main
	def start(self):
		while 1:
			self.render()
			if self.detectKey() == 'exit':
				return self.labels[self.cursor]


	def render(self):
		os.system('cls')
		for i, label in enumerate(self.labels):
			if self.cursor == i:
				self.bgOn()
				print(label, end = '')
				self.bgOff()
				print('')
			else:
				print(label)

	def bgOn(self):
		print('\033[{}m'.format(self.colors['black']), end='')
		print('\033[{}m'.format(self.bgcolors['white']), end='')
	
	def bgOff(self):
		print('\033[{}m'.format(self.colors['white']), end='')
		print('\033[{}m'.format(self.bgcolors['black']), end='')

	def detectKey(self):
		while 1:
			if keyboard.is_pressed('Up'):
				self.cursorPrev()
				sleep(0.1)
				return

			if keyboard.is_pressed('Down'):
				self.cursorNext()
				sleep(0.1)
				return

			if keyboard.is_pressed('Enter'):
				sleep(0.1)
				return 'exit'

	def cursorPrev(self):
		self.cursor = self.cursorMax if self.cursor <= 0 else self.cursor - 1

	def cursorNext(self):
		self.cursor = 0 if self.cursor + 1 > self.cursorMax else self.cursor + 1


select = SelectOne(["a","b","c"])

print(select.start())
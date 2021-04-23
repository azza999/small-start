from time import sleep

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

		self.result = None


		self.argChk()
		
		self.startSelect()

		return self.result

	def argChk(self):
		if(isinstance(self.arg, list)):
			self.labels = self.arg
			# self.color = self.colors['black']
			# self.bgcolor = self.bgcolors['white']
			return

		#axis : x, y

	# main
	def startSelect(self):
		self.render()
		# self.

		# self.result

	def render(self):

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

SelectOne(["a","b","c"])
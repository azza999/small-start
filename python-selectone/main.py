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


		self.argChk()
		
		self.startSelect()

		return self.result

	def argChk(self):
		if(isinstance(self.arg, str)):
			self.labels = self.arg.labels
			return

		#axis : x, y

	# main
	def startSelect(self):
		self.render()
		self.

		self.result

	def render(self):
		for label in self.labels:


	def bgOn(self):
		print('\033[{}m'.format(self.color), end='')
		print('\033[{}m'.format(self.bgcolor), end='')
	
	def bgOff(self):
		print('\033[{}m'.format(self.color), end='')
		print('\033[{}m'.format(self.bgcolor), end='')

print(SelectOne("a","b","c"))
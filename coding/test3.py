# L: 0, R: 1, B: 2, T: 3
LEFT = 0
RIGHT = 1
BOT = 2
TOP = 3
BTN_INDEX = 4

# X: 0, Y: 1
X = 0
Y = 1

[btn_length, click_length] = input().split()

btn_length = int(btn_length)
click_length = int(click_length)

btn_list = []
click_list = []
click_count = [0] * btn_length

print(click_count)

for i in range(btn_length):
	btn_list.append(input().split() + [i])

for i in range(click_length):
	click_list.append(input().split())

for i in range(click_length):

	click = click_list[i]

	remain_btn = [btn_list[j] for j in range(btn_length)]

	for j in range(btn_length):
		btn = btn_list[j]

		# 누른 X좌표가 btn의 좌측보다 왼쪽에 있다면 그버튼은 아니다.
		# 누른 X좌표가 btn의 우측보다 오른쪽에 있다면 그버튼은 아니다.
		# 누른 Y좌표가 btn의 상단보다 위에 있다면 그버튼은 아니다.
		# 누른 Y좌표가 btn의 하단보다 아래에 있다면 그버튼은 아니다.
		if (int(click[X]) < int(btn[LEFT]) or int(click[X]) > int(btn[RIGHT]) or
			int(click[Y]) < int(btn[BOT]) or int(click[Y]) > int(btn[TOP])):
			remain_btn.remove(btn)

	if (len(remain_btn) > 0):
		click_count[remain_btn[-1][BTN_INDEX]] += 1

for i in range(btn_length):
	print("Button #{}: {}".format(i, click_count[i]))
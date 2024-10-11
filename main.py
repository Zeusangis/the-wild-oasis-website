age = int(input("Enter your age: "))
choice = input("Enter your choice of drink: ")
if choice != "S" and choice != "T" and choice != "B":
	print("Invalid choice")
fif age <= 21:
	if choice == "S":
		print("vegetable juice")
	elif choice == "T":
		print("cranberry juice")
	else:
		print("soda")
else:
	if choice == "S":
		print("vodka")
	elif choice == "T":
		print("gin")
	else:
		print("beer")
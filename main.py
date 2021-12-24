base = 10;
aux = base/2;
espacos = int(aux);
print(espacos)
altura = espacos + 1;
i = j = n = m = 0;

for i in range(altura):
	
	print(espacos*" ", end="")

	if(i==0):
		print("\033[0;33m*\n", end="");
		print(espacos*" ", end="");
	espacos -= 1;

	for m in range(2*i+1):
		if (m%3 == 0) & (i!=0) & (i!=1):
			print("\033[0;31m@", end="");
		else:
			print("\033[0;32m@", end="")
		m+=1;

	print("\n", end="");
	i+=1;

print("\033[0;31mFeliz natal\n");
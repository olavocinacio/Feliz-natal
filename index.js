let base = 10;
let aux = base/2;
let espacos = parseInt(aux);
let altura = espacos + 1;
let i,j,n,m;

for(i=0; i<=altura; i++){
        for(j=0; j<=espacos; j++){
            process.stdout.write(" ");
        }

		if(i==0){
			process.stdout.write("\033[0;33m");
			process.stdout.write("*\n");
			for(j=0; j<=espacos; j++){
				process.stdout.write(" ");
			}
		}
		espacos-=1;
        for(n=0; n<=2*i; n++){
			if(n%3==0 && i!=0 && i!=1){
				process.stdout.write("\033[0;31m");
            	process.stdout.write("@");
			}
			else{
				process.stdout.write("\033[0;32m");
            	process.stdout.write("@");
			}
        }
        process.stdout.write("\n");
}
process.stdout.write(" Feliz natal\n");
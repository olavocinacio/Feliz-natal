#include <stdio.h>
#include<stdlib.h>

int main(){

    int base = 10;
    float aux = base/2;
    int espacos = (int)aux;
    int altura = espacos + 1;

    for(int i=0; i<=altura; i++){
        for(int j=0; j<=espacos; j++){
            printf(" ");
        }
		if(i==0){
			printf("\033[0;33m");
			printf("*\n");
			for(int j=0; j<=espacos; j++){
				printf(" ");
			}
		}
		espacos-=1;
        for(int n=0; n<=2*i; n++){
			if(n%3==0 && i!=0 && i!=1){
				printf("\033[0;31m");
            	printf("@");
			}
			else{
				printf("\033[0;32m");
            	printf("@");
			}
        }
        printf("\n");
    }
	printf(" Feliz natal\n");
    return 0;
}

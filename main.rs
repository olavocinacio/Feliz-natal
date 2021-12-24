use ansi_term::Colour;

fn main() {	
    let base = 10;
    let aux = base/2;
    let mut espacos = aux as i64;
    let altura = espacos + 1;

    for i in 0..altura {
        for _j in 0..espacos {
            print!(" ");
        }
		if i==0 {
			print!("{}", Colour::Yellow.paint("*\n"));
			for _j in 0..espacos{
				print!(" ");
			}
		}
		espacos-=1;
        for n in 0..2*i+1 {
			if n%3==0 && i!=0 && i!=1 {
				print!("{}", Colour::Red.paint("@"));
			}
			else{
				print!("{}", Colour::Green.paint("@"));
			}
        }
        print!("\n");
    }
	print!("{}", Colour::Red.paint("Feliz natal\n"));
}

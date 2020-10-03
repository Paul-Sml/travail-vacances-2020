#include <iostream>
#include <string>

#include "Champion.cpp"

Champion getChampion(std::string index){
	Champion c;

	if(index == "Ekko"){
		c = Champion(485, "Timewinder", "Phase dive", "Parallel convergence", "Chronobreak", 33);
	} else if (index == "Zac"){
		c = Champion(485, "fhgh", "Phase dive", "Parallel convergence", "Chronobreak", 33);
	} else if (index == "Riven"){
		c = Champion(485, "Timewfgtjinder", "Phase dive", "Parallel convergence", "Chronobreak", 33);
	} else if (index == "Fiora"){
		c = Champion(485, "opou,ynbv", "Phase dive", "Parallel convergence", "Chronobreak", 33);
	} else if (index == "Diana"){
		c = Champion(485, "zscgnuy", "Phase dive", "Parallel convergence", "Chronobreak", 33);
	} else if (index == "Viktor"){
		c = Champion(485, "opmilukijh", "Phase dive", "Parallel convergence", "Chronobreak", 33);
	} else if (index == "Leona"){
		c = Champion(485, "sqb", "Phase dive", "Parallel convergence", "Chronobreak", 33);
	} else if (index == "Ezreal"){
		c = Champion(485, "yiokjrbvscs", "Phase dive", "Parallel convergence", "Chronobreak", 33);
	}

	return c;


}

int main() {
	std::string i = "";

	std::cin >> i;

		std::cout << "PV : " << getChampion(i).getPV() << "\nSort Q :" << getChampion(i).getQspell() << endl;

	Champion Ekko(485, "Timewinder", "Phase dive", "Parallel convergence", "Chronobreak", 33);

	int choix = 0;

	for (;;)
	{
		while (choix != 1 && choix != 2 && choix != 3) {
		std::cout << "\n1 : Ajouter un item\n2 : Retirer un item\n3 : Afficher l'inventaire\n";
		cin >> choix;
		}


		if (choix == 1)
		{
			if (Ekko.getItemSlot1() != "" && Ekko.getItemSlot2() != "" && Ekko.getItemSlot3() != "" && Ekko.getItemSlot4() != "" && Ekko.getItemSlot5() != "" && Ekko.getItemSlot6() != "")
			{
				std::cout << "\nPlus de place";
			} else {
				std::cout << "\nEntrez le nom de l'item a ajouter\n";
				std::string ajout = "";
				std::cin >> ajout;
				if (Ekko.getItemSlot1() == "") {Ekko.setItemSlot1(ajout);}
				else if (Ekko.getItemSlot2() == "") {Ekko.setItemSlot2(ajout);}
				else if (Ekko.getItemSlot3() == "") {Ekko.setItemSlot3(ajout);}
				else if (Ekko.getItemSlot4() == "") {Ekko.setItemSlot4(ajout);}
				else if (Ekko.getItemSlot5() == "") {Ekko.setItemSlot5(ajout);}
				else if (Ekko.getItemSlot6() == "") {Ekko.setItemSlot6(ajout);}
			}
		}

		if (choix == 2)
		{
			if (Ekko.getItemSlot1() == "" && Ekko.getItemSlot2() == "" && Ekko.getItemSlot3() == "" && Ekko.getItemSlot4() == "" && Ekko.getItemSlot5() == "" && Ekko.getItemSlot6() == "")
			{
				std::cout << "\nDeja vide";
			} else {
				std::cout << "\nEntrez le nom de l'item a retirer\n";
				std::string retrait = "";
				std::cin >> retrait;
				if (Ekko.getItemSlot1() == retrait) {Ekko.setItemSlot1("");}
				else if (Ekko.getItemSlot2() == retrait) {Ekko.setItemSlot2("");}
				else if (Ekko.getItemSlot3() == retrait) {Ekko.setItemSlot3("");}
				else if (Ekko.getItemSlot4() == retrait) {Ekko.setItemSlot4("");}
				else if (Ekko.getItemSlot5() == retrait) {Ekko.setItemSlot5("");}
				else if (Ekko.getItemSlot6() == retrait) {Ekko.setItemSlot6("");}
			}
			
		}

		if (choix == 3)
		{
			std::cout << Ekko.getItemSlot1() << "\n" << Ekko.getItemSlot2() << "\n" << Ekko.getItemSlot3() << "\n" << Ekko.getItemSlot4() << "\n" << Ekko.getItemSlot5() << "\n" << Ekko.getItemSlot6() << "\n" << endl;
		}

		choix = 0;
	}

	return 0;
}
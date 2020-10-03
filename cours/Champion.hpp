#ifndef DEF_CHAMPION
#define DEF_CHAMPION

#include <string>

class Champion {

  	protected :
    	int pV;

  	private :
	    std::string qspell;
	    std::string wspell;
	    std::string espell;
	    std::string rspell;
	    int armure;
	    std::string itemSlot1;
	    std::string itemSlot2;
	    std::string itemSlot3;
	    std::string itemSlot4;
	    std::string itemSlot5;
	    std::string itemSlot6;
	    //Item[] inventaire;

	public :

		Champion();
		Champion(int pv, std::string qSpell, std::string wSpell, std::string eSpell, std::string rSpell, int armure);
		Champion(int pv, std::string qSpell, std::string wSpell, std::string eSpell, std::string rSpell, int armure, std::string itemSlot1);

		//getter

		int getPV();

		std::string getQspell();
	    std::string getWspell();
	    std::string getEspell();
	    std::string getRspell();
	    int getArmure();

	    std::string getItemSlot1();
	    std::string getItemSlot2();
	    std::string getItemSlot3();
	    std::string getItemSlot4();
	    std::string getItemSlot5();
	    std::string getItemSlot6();

	    //getter

		//setter

	    void setPV(int pV);

	    void setQspell(std::string qspell);
	    void setWspell(std::string wspell);
	    void setEspell(std::string espell);
	    void setRspell(std::string rspell);
	    void setArmure(int defense);

	    void setItemSlot1(std::string itemSlot1);
	    void setItemSlot2(std::string itemSlot2);
	    void setItemSlot3(std::string itemSlot3);
	    void setItemSlot4(std::string itemSlot4);
	    void setItemSlot5(std::string itemSlot5);
	    void setItemSlot6(std::string itemSlot6);

	    //setter
};

#endif
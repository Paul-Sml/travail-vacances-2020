#ifndef DEF_BATIMENT
#define DEF_BATIMENT

#include <string>

class batiment {

  	protected :
    	int pV;

  	private :
	    int cout;
		int energie;

		string passif;
		string actif;

	public :

		//getter

		int getPV();
		int getCout();
		int getEnergie();

		string getPassif();
	    string getActif();

	    //getter

		//setter

	    int setPV();
		int sgetCout();
		int sgetEnergie();

		string setPassif();
	    string setActif();

	    //setter
};

#endif
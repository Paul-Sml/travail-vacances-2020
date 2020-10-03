#include "batiment.hpp"

using namespace std;

// CONSTRUCTOR
batiment::batiment() {}
batiment::batiment(int pv, std::string qSpell, std::string wSpell, std::string eSpell, std::string rSpell, int armure) {
	this->setPV(pV);
	this->setCout(cout);
	this->setEnergie(energie);
	this->setPassif(passif);
	this->setActif(actif);
}


int batiment::getPV() {
	return this->pV;
}
int batiment::getCout(){
	return this->cout;
}
int batiment::getEnergie(){
	return this->energie;
}

string batiment::getPassif(){
	return this->passif;
}
string batiment::getActif(){
	return this->actif;
}

void batiment::setPV(int pV) {
	this->pV = pV;
}

void batiment::setCout(int cout) {
	this->cout = cout;
}
void batiment::setEnergie(int energie) {
	this->energie = energie;
}
void batiment::setPassif(std::string passif) {
	this->passif = passif;
}
void batiment::setActif(std::string actif) {
	this->actif = actif;
}
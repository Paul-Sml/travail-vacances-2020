#include "Champion.hpp"

using namespace std;

// CONSTRUCTOR
Champion::Champion() {}
Champion::Champion(int pv, std::string qSpell, std::string wSpell, std::string eSpell, std::string rSpell, int armure) {
	this->setPV(pv);
	this->setQspell(qSpell);
	this->setWspell(wSpell);
	this->setEspell(eSpell);
	this->setRspell(rSpell);
	this->setArmure(armure);
}
Champion::Champion(int pv, std::string qSpell, std::string wSpell, std::string eSpell, std::string rSpell, int armure, std::string itemspeciale) {
	this->setPV(pv);
	this->setQspell(qSpell);
	this->setWspell(wSpell);
	this->setEspell(eSpell);
	this->setRspell(rSpell);
	this->setArmure(armure);
	this->setItemSlot1(itemspeciale);
}

// SETTER

//protected

int Champion::getPV() {
	return this->pV;
}

//private

std::string Champion::getQspell() {
	return this->qspell;
}

std::string Champion::getWspell() {
	return this->wspell;
}

std::string Champion::getEspell() {
	return this->espell;
}

std::string Champion::getRspell() {
	return this->rspell;
}

int Champion::getArmure() {
	return this->armure;
}

std::string Champion::getItemSlot1() {
	return this->itemSlot1;
}
std::string Champion::getItemSlot2() {
	return this->itemSlot2;
}
std::string Champion::getItemSlot3() {
	return this->itemSlot3;
}
std::string Champion::getItemSlot4() {
	return this->itemSlot4;
}
std::string Champion::getItemSlot5() {
	return this->itemSlot5;
}
std::string Champion::getItemSlot6() {
	return this->itemSlot6;
}



void Champion::setPV(int pV) {
	this->pV = pV;
}

void Champion::setQspell(std::string qspell) {
	this->qspell = qspell;
}
void Champion::setWspell(std::string wspell) {
	this->wspell = wspell;
}
void Champion::setEspell(std::string espell) {
	this->espell = espell;
}
void Champion::setRspell(std::string rspell) {
	this->rspell = rspell;
}
void Champion::setArmure(int defense) {
	this->armure = defense;
}

void Champion::setItemSlot1(std::string itemSlot1) {
	this->itemSlot1 = itemSlot1;
}
void Champion::setItemSlot2(std::string itemSlot2) {
	this->itemSlot2 = itemSlot2;
}
void Champion::setItemSlot3(std::string itemSlot3) {
	this->itemSlot3 = itemSlot3;
}
void Champion::setItemSlot4(std::string itemSlot4) {
	this->itemSlot4 = itemSlot4;
}
void Champion::setItemSlot5(std::string itemSlot5) {
	this->itemSlot5 = itemSlot5;
}
void Champion::setItemSlot6(std::string itemSlot6) {
	this->itemSlot6 = itemSlot6;
}

// END SETTER

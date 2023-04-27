package com.caresoft.clinicapp;

public class Physician extends User implements HIPAACompliantUser {

	@Override
	public boolean assignPin(int pin) {
		// TODO Auto-generated method stub
		double test=pin;
		int digit=0;
		while(test>1) {
		test=test/10;
		digit++;}
		if(digit==4) {
			this.setPin(pin);
			return true;
		}
		else {
		return false;
		}
	}

	@Override
	public boolean accessAuthorized(Integer confirmedAuthID) {
		// TODO Auto-generated method stub
		if (confirmedAuthID==this.id) {
			return true;
		}
		else {

			return false;
		}
	}
	Physician(int id ){
		this.id=id;
	}
}

package com.caresoft.clinicapp;

import java.util.ArrayList;
import java.util.Date;

public class AdminUser extends User implements HIPAACompliantAdmin, HIPAACompliantUser {
//... imports class definition...
    
    // Inside class:
    private Integer employeeID;
    private String role;
    private ArrayList<String> securityIncidents;
    
    // TO DO: Implement a constructor that takes an ID and a role
    public AdminUser(int id) {
    	this.employeeID=id;
    	securityIncidents=new ArrayList<String>();
    }
    public AdminUser(int id,String com) {
    	this.employeeID=id;
    	this.role=com;
    	securityIncidents=new ArrayList<String>();

    }
    // TO DO: Implement HIPAACompliantUser!
    // TO DO: Implement HIPAACompliantAdmin!
    
    public void newIncident(String notes) {
        String report = String.format(
            "Datetime Submitted: %s \n,  Reported By ID: %s\n Notes: %s \n", 
            new Date(), this.id, notes
        );
        System.out.print(report);

        securityIncidents.add(report);
    }
    public void authIncident() {
        String report = String.format(
            "Datetime Submitted: %s \n,  ID: %s\n Notes: %s \n", 
            new Date(), this.id, "AUTHORIZATION ATTEMPT FAILED FOR THIS USER"
        );
        System.out.print(report);

        securityIncidents.add(report);
    }
	@Override
	public boolean assignPin(int pin) {
		// TODO Auto-generated method stub
		double test=pin;
		int digit=0;
		while(test>1) {
		test=test/10;
		digit++;}
		if(digit>=6) {
			this.setPin(pin);
			return true;
		}
		else {
		return false;
		}
	}
	@Override
	public boolean accessAuthorized(Integer confirmedAuthID) {
		if (confirmedAuthID==this.employeeID) {
			return true;
		}
		else {
			System.out.print(role);
			this.newIncident(role);
			this.authIncident();
		return false;
		}
	}
	@Override
	public ArrayList<String> reportSecurityIncidents() {
		// TODO Auto-generated method stub
		return null;
	}
    
    // TO DO: Setters & Getters

}

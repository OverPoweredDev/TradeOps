package com.group22.back_end.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

@Entity
@Table(name = "security")
public class Security {
    @Id
    @Column(name = "ID")
    private int securityId;

    @Column(name = "ISIN",nullable = false)
    private int isin;

    @Column(name = "CUSIP",nullable = false)
    private int cusip;

    @Column(name = "ISSUER",nullable = false)
    private String issuer;

    @Column(name = "MATURITYDATE")
    private Date maturityDate;

    @Column(name = "COUPON")
    private float coupon;

    @Column(name = "TYPE")
    private String securityType;

    @Column(name = "FACEVALUE")
    private float faceValue;

    @Column(name = "STATUS")
    private String status;

    public Security() {
    }

    public Security(int securityId, int isin, int cusip, String issuer, Date maturityDate, float coupon, String securityType, float faceValue, String status) {
        this.securityId = securityId;
        this.isin = isin;
        this.cusip = cusip;
        this.issuer = issuer;
        this.maturityDate = maturityDate;
        this.coupon = coupon;
        this.securityType = securityType;
        this.faceValue = faceValue;
        this.status = status;
        this.securityType = securityType;
    }

    public int getSecurityId() {
        return securityId;
    }

    public void setSecurityId(int securityId) {
        this.securityId = securityId;
    }

    public int getIsin() {
        return isin;
    }

    public void setIsin(int isin) {
        this.isin = isin;
    }

    public int getCusip() {
        return cusip;
    }

    public void setCusip(int cusip) {
        this.cusip = cusip;
    }

    public String getIssuer() {
        return issuer;
    }

    public void setIssuer(String issuer) {
        this.issuer = issuer;
    }

    public Date getMaturityDate() {
        return maturityDate;
    }

    public void setMaturityDate(Date maturityDate) {
        this.maturityDate = maturityDate;
    }

    public float getCoupon() {
        return coupon;
    }

    public void setCoupon(float coupon) {
        this.coupon = coupon;
    }

    public String getSecurityType() {
        return securityType;
    }

    public void setSecurityType(String securityType) {
        this.securityType = securityType;
    }

    public float getFaceValue() {
        return faceValue;
    }

    public void setFaceValue(float faceValue) {
        this.faceValue = faceValue;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}

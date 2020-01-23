package cn.edu.cqcet.teamlala.po;

import com.sun.istack.internal.Interned;
import jdk.nashorn.internal.ir.annotations.Ignore;

import java.awt.*;
import java.io.Serializable;
import java.util.List;

public class Paragraph implements Serializable {
    private String paragraphType;
    private int position;
    private String paragraphText;
    private String imageUrl;



    public String getParagraphType() {
        return paragraphType;
    }

    public void setParagraphType(String paragraphType) {
        this.paragraphType = paragraphType;
    }

    public int getPosition() {
        return position;
    }

    public void setPosition(int position) {
        this.position = position;
    }

    public String getParagraphText() {
        return paragraphText;
    }

    public void setParagraphText(String paragraphText) {
        this.paragraphText = paragraphText;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    @Override
    public String toString() {
        return "position" + position;
    }
}

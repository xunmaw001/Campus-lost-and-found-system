package com.entity.model;

import com.entity.ShiwuYuyueEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import com.fasterxml.jackson.annotation.JsonFormat;
import java.util.Date;
import org.springframework.format.annotation.DateTimeFormat;
import java.io.Serializable;


/**
 * 失物认领
 * 接收传参的实体类
 *（实际开发中配合移动端接口开发手动去掉些没用的字段， 后端一般用entity就够用了）
 * 取自ModelAndView 的model名称
 */
public class ShiwuYuyueModel implements Serializable {
    private static final long serialVersionUID = 1L;




    /**
     * 主键
     */
    private Integer id;


    /**
     * 报名编号
     */
    private String shiwuYuyueUuidNumber;


    /**
     * 寻物启示
     */
    private Integer shiwuId;


    /**
     * 用户
     */
    private Integer yonghuId;


    /**
     * 报名理由
     */
    private String shiwuYuyueText;


    /**
     * 照片
     */
    private String shiwuYuyuePhoto;


    /**
     * 寻物启示报名时间
     */
    @JsonFormat(locale="zh", timezone="GMT+8", pattern="yyyy-MM-dd HH:mm:ss")
	@DateTimeFormat
    private Date insertTime;


    /**
     * 报名状态
     */
    private Integer shiwuYuyueYesnoTypes;


    /**
     * 审核回复
     */
    private String shiwuYuyueYesnoText;


    /**
     * 审核时间
     */
    @JsonFormat(locale="zh", timezone="GMT+8", pattern="yyyy-MM-dd HH:mm:ss")
	@DateTimeFormat
    private Date shiwuYuyueShenheTime;


    /**
     * 创建时间 show3 listShow
     */
    @JsonFormat(locale="zh", timezone="GMT+8", pattern="yyyy-MM-dd HH:mm:ss")
	@DateTimeFormat
    private Date createTime;


    /**
	 * 获取：主键
	 */
    public Integer getId() {
        return id;
    }


    /**
	 * 设置：主键
	 */
    public void setId(Integer id) {
        this.id = id;
    }
    /**
	 * 获取：报名编号
	 */
    public String getShiwuYuyueUuidNumber() {
        return shiwuYuyueUuidNumber;
    }


    /**
	 * 设置：报名编号
	 */
    public void setShiwuYuyueUuidNumber(String shiwuYuyueUuidNumber) {
        this.shiwuYuyueUuidNumber = shiwuYuyueUuidNumber;
    }
    /**
	 * 获取：寻物启示
	 */
    public Integer getShiwuId() {
        return shiwuId;
    }


    /**
	 * 设置：寻物启示
	 */
    public void setShiwuId(Integer shiwuId) {
        this.shiwuId = shiwuId;
    }
    /**
	 * 获取：用户
	 */
    public Integer getYonghuId() {
        return yonghuId;
    }


    /**
	 * 设置：用户
	 */
    public void setYonghuId(Integer yonghuId) {
        this.yonghuId = yonghuId;
    }
    /**
	 * 获取：报名理由
	 */
    public String getShiwuYuyueText() {
        return shiwuYuyueText;
    }


    /**
	 * 设置：报名理由
	 */
    public void setShiwuYuyueText(String shiwuYuyueText) {
        this.shiwuYuyueText = shiwuYuyueText;
    }
    /**
	 * 获取：照片
	 */
    public String getShiwuYuyuePhoto() {
        return shiwuYuyuePhoto;
    }


    /**
	 * 设置：照片
	 */
    public void setShiwuYuyuePhoto(String shiwuYuyuePhoto) {
        this.shiwuYuyuePhoto = shiwuYuyuePhoto;
    }
    /**
	 * 获取：寻物启示报名时间
	 */
    public Date getInsertTime() {
        return insertTime;
    }


    /**
	 * 设置：寻物启示报名时间
	 */
    public void setInsertTime(Date insertTime) {
        this.insertTime = insertTime;
    }
    /**
	 * 获取：报名状态
	 */
    public Integer getShiwuYuyueYesnoTypes() {
        return shiwuYuyueYesnoTypes;
    }


    /**
	 * 设置：报名状态
	 */
    public void setShiwuYuyueYesnoTypes(Integer shiwuYuyueYesnoTypes) {
        this.shiwuYuyueYesnoTypes = shiwuYuyueYesnoTypes;
    }
    /**
	 * 获取：审核回复
	 */
    public String getShiwuYuyueYesnoText() {
        return shiwuYuyueYesnoText;
    }


    /**
	 * 设置：审核回复
	 */
    public void setShiwuYuyueYesnoText(String shiwuYuyueYesnoText) {
        this.shiwuYuyueYesnoText = shiwuYuyueYesnoText;
    }
    /**
	 * 获取：审核时间
	 */
    public Date getShiwuYuyueShenheTime() {
        return shiwuYuyueShenheTime;
    }


    /**
	 * 设置：审核时间
	 */
    public void setShiwuYuyueShenheTime(Date shiwuYuyueShenheTime) {
        this.shiwuYuyueShenheTime = shiwuYuyueShenheTime;
    }
    /**
	 * 获取：创建时间 show3 listShow
	 */
    public Date getCreateTime() {
        return createTime;
    }


    /**
	 * 设置：创建时间 show3 listShow
	 */
    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    }

package com.lms.entity;

public class IssueRequest {
 
	
	private Long bookBookId;
	private Long userId;
	
	
	public IssueRequest(Long bookBookId, Long userId) {
		super();
		this.bookBookId = bookBookId;
		this.userId = userId;
	}
	
	public Long getBookBookId() {
		return bookBookId;
	}

	public void setBookBookId(Long bookBookId) {
		this.bookBookId = bookBookId;
	}

	public Long getUserId() {
		return userId;
	}
	public void setUserId(Long userId) {
		this.userId = userId;
	}
	
	
}

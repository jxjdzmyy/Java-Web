package entity;

import java.util.List;

public class Page {
	// 总页数
	private int totalPageCount = 1;
	// 页面大小，即每页显示记录数
	private int pageSize = 0;
	// 记录总数
	private int totalCount = 0;
	// 当前页号
	private int currPageNo = 1;
	// 每页新闻集合
	private List list;

	public List getList() {
		return list;
	}

	public void setListPhotos(List list) {
		this.list = list;
	}

	public int getCurrPageNo() {
		if (totalPageCount == 0)
			return 0;
		return currPageNo;
	}

	public void setCurrPageNo(int currPageNo) {
		if (this.currPageNo > 0)
			this.currPageNo = currPageNo;
	}

	public int getTotalPageCount() {
		return totalPageCount;
	}

	public void setTotalPageCount(int totalPageCount) {
		this.totalPageCount = totalPageCount;
	}

	public int getPageSize() {
		return pageSize;
	}

	public void setPageSize(int pageSize) {
		if (pageSize > 0)
			this.pageSize = pageSize;
	}

	public int getTotalCount() {
		return totalCount;
	}

	public void setTotalCount(int totalCount) {
		if (totalCount > 0) {
			this.totalCount = totalCount;
			// 计算总页数
			totalPageCount = this.totalCount % pageSize == 0 ? (this.totalCount / pageSize)
					: this.totalCount / pageSize + 1;
		}
	}
	//获取当前页面数据条数
	public int getCurPageCount() {
		return Math.min(pageSize, totalCount-(currPageNo-1)*pageSize);
	}
}

# 对象处理
gutijiao={
	"name":"固体胶",
	"width":100
}

# print(gutijiao['name'][1:2])

# 字符串处理
moon="圆圆的月亮，像一只圆圆的船"

index=moon.find("船")
print(index)

print(type(index))
print(len(moon))
print(moon[:-3])

# raise SystemExit

# 数组处理

color=['circle','blue',"gray","light"]

print(color.pop())

color.append('river')
print(color)

liang=18214
print(liang+1)

xiaoshu=213.12341
print(xiaoshu.__int__())

nums=[1,3,5,7,9]
print([n+1 for n in nums])

# 格式化
print("%3d %.2f" % (1, 1341.1231))
print("%3d %.2f" % (2, 1341.1231))
print("%3d %.2f" % (3, 1341.1231))


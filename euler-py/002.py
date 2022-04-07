"""
Project Euler Problem 2
=======================

Each new term in the Fibonacci sequence is generated by adding the
previous two terms. By starting with 1 and 2, the first 10 terms will be:

                  1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

Find the sum of all the even-valued terms in the sequence which do not
exceed four million.
"""

def fib(n):
    l = [0,1]
    while l[-1] < n:
        l.append(l[-1] + l[-2])

    return l[2:-1]


print(sum(x for x in fib(4000000) if x % 2 == 0))




"""This is the doc string for the file1 file where we can say things about the python module.add()
We can write long text if we want.

* topic 1
* topic 2    

"""


def file1_func1():
    """This function does nothing."""
    pass


def file1_func2(param1: int, param2: int):
    """This function returns the sum of the values you pass in as arguments.

    Args:
        param1 (int): Integer to sum.
        param2 (int): Integer to sum.

    Returns:
        int: Sum of the given parameter's values.
    """
    return param1 + param2


def file1_func3():
    """This function does nothing."""
    pass


def file1_func4(param1: str, param2: int, param3: bool):
    """"This function returns the 10 or the param2 times 3 if ...


    Args:
        param1 (str): String to check if we should do something.
        param2 (int): Base value to the multiplication.
        param3 (bool): If we should do the multiplication or not.

    Returns:
        int: _description_
    """
    if param3 and param1 == "Y":
        return param2 * 3
    return 10


def file1_func5(param1: str, param2: int):
    """This function returns true.

    Args:
        param1 (str): Some String...
        param2 (int): Some Integer...

    Returns:
        boolean: Always true.
    """
    return True

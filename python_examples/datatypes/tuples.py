def create_tuple_from_list(list_data: list) -> tuple:
    """Receives a list of data and returns a tuple of data.

    Args:
        list_data (list): A lists of elements of any datatype.

    Returns:
        tuple: A tuple based on the list of data received.
    """
    return tuple(list_data)


def create_and_print_tuple() -> None:
    """Creates 3 distinct tuples and prints them."""
    myTuple: tuple = (1, 2, 3, 4, 5)
    myTuple2: tuple = ("a", "b", "c")
    # in a list we get the reference to it an not the actual values
    myTuple3: tuple = ([1, 2, 3], 1, "c")

    print("\nPrinting create_and_print_tuple():")
    print(myTuple)
    print(myTuple2)
    print(myTuple3)


def create_change_list_and_print_tuple() -> None:
    """Creates a tuple with a list and appends a value to it."""
    # in a list we get the reference to it an not the actual values
    myTuple: tuple = ([1, 2, 3], 1, "c")
    # we can append values to list since we are storing the reference to the list and not the values of it.
    myTuple[0].append(5)
    # Tuples can store any kind of object, although tuples that contain lists (or any other mutable objects) are not hashable: https://docs.python.org/3/glossary.html#term-hashable

    print("\nPrinting create_change_list_and_print_tuple():")
    print(myTuple)


def update_list_and_print_hash() -> None:
    """Creates a tuple with a list and appends a value to it.
    Creates another tuple of strings.
    Shows the hash value for both tuples.
    """
    # in a list we get the reference to it an not the actual values
    myTuple: tuple = ([1, 2, 3], 1, "c")
    # we can append values to list since we are storing the reference to the list and not the values of it.
    myTuple[0].append(5)
    # Tuples can store any kind of object, although tuples that contain lists (or any other mutable objects) are not hashable: https://docs.python.org/3/glossary.html#term-hashable
    myTuple2: tuple = ("a", "b", "c")

    print("\nPrinting update_list_and_print_hash():")
    print(f"\nmyTuple2 hash value: {hash(myTuple2)}")
    print(f"\nmyTuple hash value: {hash(myTuple)}")


def main() -> None:
    """Main file function executed when we run the python script file."""
    print("\nPrinting create_tuple_from_list():")
    newTuple = create_tuple_from_list([1, 5, 9, 8])
    print(newTuple)

    print("\nPrinting newTuple slicing:")
    print(newTuple[1:-1])

    create_and_print_tuple()

    create_change_list_and_print_tuple()

    # print('\nPrinting updating a tuple value:')
    # print(newTuple[0] = 9999)

    # update_list_and_print_hash()


# LISTS VS TUPLES
# As lists are mutable, Python needs to allocate an extra memory block in case there is a need to extend the size of the list object after it is created.
# In contrary, as tuples are immutable and fixed size, Python allocates just the minimum memory block required for the data.


if __name__ == "__main__":
    main()

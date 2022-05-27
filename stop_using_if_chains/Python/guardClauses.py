from dataclasses import dataclass


@dataclass
class Car:
    name: str
    type: str
    model: str
    certified: bool


def isFerrari(obj: Car) -> bool:
    """Returns is object is a Ferrari car.

    Args:
        obj (Car): The object to check if it is a car.

    Returns:
        bool: The car is a Ferrari.
    """
    if obj.type == "car":
        if obj.model == "Ferrari":
            return True
        else:
            return False
    else:
        return False


def isFerrariGuardClause(obj: Car) -> bool:
    """Returns is object is a Ferrari car.

    Args:
        obj (Car): The object to check if it is a car.

    Returns:
        bool: The car is a Ferrari.
    """
    if obj.type != "car":
        return False
    if obj.model != "Ferrari":
        return False
    return True


def isFerrariCertified(obj: Car) -> bool:
    """Returns is object is a Ferrari car.

    Args:
        obj (Car): The object to check if it is a car.

    Returns:
        bool: The car is a Ferrari.
    """
    if obj.type == "car":
        if obj.model == "Ferrari":
            if obj.certified:
                return True
            else:
                return False
        else:
            return False
    else:
        return False


def isFerrariCertifiedGuardClause(obj: Car) -> bool:
    """Returns is object is a Ferrari car.

    Args:
        obj (Car): The object to check if it is a car.

    Returns:
        bool: The car is a Ferrari.
    """
    if obj.type != "car":
        return False
    if obj.model != "Ferrari":
        return False
    if not obj.certified:
        return False
    return True


def main():
    car = Car("car", "car", "Ford", True)
    car2 = Car("car2", "car", "Ferrari", True)
    car3 = Car("car3", "car", "Ferrari", False)
    car4 = Car("car4", "bike", "Honda", True)
    cars = [car, car2, car3, car4]

    for car in cars:
        print(f"{car.name} is { '' if isFerrari(car) else 'not '}a ferrari")

    print()

    for car in cars:
        print(f"{car.name} is { '' if isFerrariGuardClause(car) else 'not '}a ferrari")

    print("\n**New objects and functions (Certified)**\n")

    for car in cars:
        print(f"{car.name} is { '' if isFerrariCertified(car) else 'not '}a ferrari")

    print()

    for car in cars:
        print(
            f"{car.name} is { '' if isFerrariCertifiedGuardClause(car) else 'not '}a ferrari"
        )


if __name__ == "__main__":
    main()


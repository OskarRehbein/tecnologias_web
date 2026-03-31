from functions import add, convert_to_integer, divide, get_element


def test_add_numbers():
    assert add(2, 3) == 5


def test_divide_numbers():
    assert divide(10, 2) == 5


def test_get_valid_element():
    list_ = [1, 2, 3]
    assert get_element(list_, 1) == 2


def test_convert_valid_integer():
    assert convert_to_integer(5.5) == 5

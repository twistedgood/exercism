def convert(number):
    sounds = []
    sounds.append({'number': 3, 'sound': 'Pling'})
    sounds.append({'number': 5, 'sound': 'Plang'})
    sounds.append({'number': 7, 'sound': 'Plong'})
      
    result = ''
    for e in sounds:
        if number % e.get('number') == 0:
            result += e.get('sound')

    if result:
        return result

    return str(number)

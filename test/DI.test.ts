import { DI } from "../dist/DI";

class Dump{
    public dump;
    constructor(dump){
        this.dump = dump;
    }
    toValue(){
        return this.dump;
    }
}

test('add DI and extract', () => {
    let dump = new Dump(1);
    DI.add(dump);
    expect(DI.get(Dump)).toBe(dump);
    let dump2 = new Dump(2);
    DI.add(dump2,"dump2");
    expect(DI.get("dump2")).toBe(dump2);
    DI.del("dump2");
    expect(DI.get("dump2")).toBe(null);
    DI.del(Dump);
    expect(DI.get(Dump)).toBe(null);

  });
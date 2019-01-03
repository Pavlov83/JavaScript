var obj = {};

Object.defineProperty(obj, 'attrib', {
    value: 42,
    writable: true,
    configurable: false //attrib cannot be deleted
});

delete.obj.attrib;//will not work

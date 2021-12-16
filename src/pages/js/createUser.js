var errorMap = {};
    var fieldMap = {
      name: {
        regex: /[\w\s-]{1,255}/i,
        error: 'Tên chỉ gồm chữ cái, khoảng trắng, và kí tự _- và có độ dài tối đa là 255',
      },
      phone: {
        regex: /^((09|03|07|08|05)+([0-9]{8})\b)$/,
        error: 'Số điện thoại chỉ gồm 10 chữ số và bắt đầu bằng các đầu số 09|03|07|08|05',
      },
      sex: {
        regex: /^[0-3]$/,
        error: 'Giới tính không đúng định dạng',
      },
      birthday: {
        regex: /^[1-9]\d{3}-[01]\d-[0-3]\d$/,
        error: 'Ngày sinh không đúng định dạng yyyy-mm-dd',
      },
      email: {
        regex: /.+/i,
        error: 'Email không đúng định dạng',
      },
      website: {
        regex: /^((http:|https:|http:|https:)\/\/(www\.)?)?[a-z0-9]+([-.]{1}[a-z0-9]+)+\.[a-z]{2,255}(:[0-9]{1,5})?$/i,
        error: 'Website không đúng định dạng',
      },
      description: {
        regex: /^.{0,2000}$/i,
        error: 'Chú thích có độ dài tối đa là 2000 kí tự',
      },
    }
    function onBlur(id) {
      var input = document.getElementById(id);
      if (!fieldMap[id] || !input) return alert(JSON.stringify({ id, value: input && input.value }));

      console.log({ id, value: input.value })

      if (fieldMap[id].regex.test(input.value)) {
        input.classList.remove('error');
        errorMap[id] = null;
        input.title = '';
        return;
      };

      input.classList.add('error');
      errorMap[id] = fieldMap[id].error;
      input.title = fieldMap[id].error;
      console.warning(fieldMap[id].error)
    }

    function onClear() {
      errorMap = {};
      Object.keys(fieldMap).forEach(id => {
        document.getElementById(id).value = null;
        document.getElementById(id).title = '';
        document.getElementById(id).classList.remove('error');
      })
    }

    function onSubmit() {
      if (!document.getElementById('name').value) {
        return alert('Trường tên không được để trống')
      }
      var errors = Object.values(errorMap)
      console.log("createUser errorMap", errorMap)
      if (errors && errors.filter(e => !!e).length) {
        return alert(errors.join('; '))
      }
      document.getElementById('userForm').submit();
    }
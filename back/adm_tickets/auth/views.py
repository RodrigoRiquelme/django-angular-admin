from django.contrib.auth import authenticate, logout
from django.contrib.auth.forms import AuthenticationForm
from django.core.exceptions import NON_FIELD_ERRORS
from django.views.generic import FormView, RedirectView


class LoginView(FormView):
    form_class = AuthenticationForm

    def form_valid(self, form):

        user = authenticate(username=form.cleaned_data["username"],
                            password=form.cleaned_data["password"])

        if user is not None:

            if user.is_active:
                login(self.request, user)
                return super(LoginView, self).form_valid(form)
            else:
                form.full_clean()
                form._errors[NON_FIELD_ERRORS] = form.error_class(['La cuenta esta deshabilitada.'])
                return super(LoginView, self).form_invalid(form)

        form.full_clean()
        form.add_error(None, 'Usuario o contraseña incorrectos.')
        return super(LoginView, self).form_invalid(form)


class LogoutView(RedirectView):
    pattern_name = 'users:login'

    def get_redirect_url(self, *args, **kwargs):
        logout(self.request)
        return super(LogoutView, self).get_redirect_url(*args, **kwargs)
"use strict";var popupPanel=document.querySelector(".popup-box"),inputEmail=document.querySelector("#email"),inputName=document.querySelector("#name"),inputSurname=document.querySelector("#surname"),inputCredit=document.querySelector("#credit-card"),openPopupPanel=document.querySelector(".offert-btn"),sendPopupBtn=document.querySelector(".send-btn"),popupCloseBtn=document.querySelector(".popup-close-btn"),popupTabs=document.querySelectorAll(".popup-tab"),sendMsgBox=document.querySelector(".contact-popup"),allInputs=document.querySelectorAll(".popup-tab input"),errorText=document.querySelectorAll(".error-text"),showError=function(e,t){e.parentElement.classList.add("error"),e.nextElementSibling.textContent=t},removeError=function(e){e.parentElement.classList.remove("error")},checkCreditCard=function(e){""===e.value&&showError(e,e.placeholder)},checkLength=function(e,t){e.value.length<t&&showError(e,"Numer karty musi składać się z min. ".concat(t," znaków"))},checkEmail=function(e){/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e.value)?removeError(e):showError(e,"Wprowadź poprawny adres e-mail...")},checkErrors=function(){var e=document.querySelectorAll(".popup-tab"),t=0;e.forEach(function(e){e.classList.contains("error")&&t++}),0===t&&sendMsgBox.classList.add("show-popup-msg")},checkInput=function(e){e.forEach(function(e){""===e.value?showError(e,e.placeholder):removeError(e)})};sendPopupBtn.addEventListener("click",function(e){e.preventDefault(),checkInput([inputEmail,inputName,inputSurname,inputCredit]),checkEmail(inputEmail),checkLength(inputCredit,16),checkCreditCard(inputCredit),checkErrors()}),openPopupPanel.addEventListener("click",function(){popupPanel.style.display="block"}),popupCloseBtn.addEventListener("click",function(e){e.preventDefault(),popupPanel.style.display="none",popupTabs.forEach(function(e){e.classList.remove("error")}),allInputs.forEach(function(e){e.value=""})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9mZmVydHMuanMiXSwibmFtZXMiOlsicG9wdXBQYW5lbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImlucHV0RW1haWwiLCJpbnB1dE5hbWUiLCJpbnB1dFN1cm5hbWUiLCJpbnB1dENyZWRpdCIsIm9wZW5Qb3B1cFBhbmVsIiwic2VuZFBvcHVwQnRuIiwicG9wdXBDbG9zZUJ0biIsInBvcHVwVGFicyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzZW5kTXNnQm94IiwiYWxsSW5wdXRzIiwicG9wdXBUYWIiLCJpbnB1dCIsInBhcmVudEVsZW1lbnQiLCJjbGFzc0xpc3QiLCJlcnJvck1zZyIsIm5leHRFbGVtZW50U2libGluZyIsInJlbW92ZUVycm9yIiwibXNnIiwiY2hlY2tDcmVkaXRDYXJkIiwicmVtb3ZlIiwidmFsdWUiLCJzaG93RXJyb3IiLCJjaGVja0xlbmd0aCIsInBsYWNlaG9sZGVyIiwibnVtYmVyIiwiY2hlY2tFbWFpbCIsImxlbmd0aCIsImNvbmNhdCIsImVtYWlsIiwiYWxsUG9wdXBUYWJzIiwiZm9yRWFjaCIsImNoZWNrRXJyb3JzIiwiY2hlY2tJbnB1dCIsImVsZW1lbnQiLCJjb250YWlucyIsImVycm9ycyIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJhZGQiLCJzdHlsZSIsImRpc3BsYXkiLCJ0YWIiXSwibWFwcGluZ3MiOiJhQUNBLElBQU1BLFdBQWFDLFNBQVNDLGNBQWMsWUFBWSxFQUFoREYsV0FBYUMsU0FBU0MsY0FBYyxRQUFBLEVBQ3BDQyxVQUFhRixTQUFTQyxjQUFjLE9BQVEsRUFDNUNFLGFBQVlILFNBQVNDLGNBQWMsVUFBUSxFQUMzQ0csWUFBZUosU0FBU0MsY0FBYyxjQUFXLEVBQ2pESSxlQUFjTCxTQUFTQyxjQUFjLGFBQWUsRUFDcERLLGFBQWlCTixTQUFTQyxjQUFjLFdBQUEsRUFDeENNLGNBQWVQLFNBQVNDLGNBQWMsa0JBQVksRUFDbERPLFVBQWFSLFNBQUdBLGlCQUF1QixZQUFBLEVBQ3ZDUyxXQUFZVCxTQUFTVSxjQUFpQixnQkFBYSxFQUNuREMsVUFBYVgsU0FBU0MsaUJBQWMsa0JBQWlCLEVBQ3JEVyxVQUFZWixTQUFTVSxpQkFBaUIsYUFBQSxFQUtyQ0csVUFBV0MsU0FBQUEsRUFBTUMsR0FDZEMsRUFBYUQsY0FFaEJFLFVBQVdILElBQU1JLE9BQUFBLEVBRXZCSixFQUFBSSxtQkFDS0MsWUFBY0MsQ0FEcEIsRUFHQ1AsWUFBa0IsU0FBQUMsR0FDbEJBLEVBQUFDLGNBRUtNLFVBQWVDLE9BQUcsT0FBbEJELENBRk4sRUFLQ0EsZ0JBQUEsU0FBQVAsR0FDQSxLQUFBQSxFQUFBUyxPQUVEQyxVQUFNQyxFQUFjWCxFQUFBWSxXQUFkRCxDQUZOLEVBT0NBLFlBQUEsU0FBQVgsRUFBQWEsR0FHS0MsRUFBQUEsTUFBVUMsT0FBR0YsR0FDbEJILFVBQVlWLEVBQ1gsdUNBQUFnQixPQUFBSCxFQUFBLFNBQUEsQ0FBQSxDQUxGLEVBWUNDLFdBQUEsU0FBQUcsR0FJQSw0SkFHQUMsS0FBYUMsRUFBUVYsS0FBQSxFQVhwQkosWUFZSU4sQ0FBU0csRUFWYlEsVUFZQU8sRUFBQSxtQ0FBQSxDQVZGLEVBaUJDRyxZQUFBLFdBSUQsSUFBTUMsRUFBYW5DLFNBQWJtQyxpQkFBc0IsWUFBQSxFQUMzQnJCLEVBQU1tQixFQWZORCxFQWlCRVIsUUFBVVksU0FBQUEsR0FDVnZCLEVBQU1HLFVBQUFxQixTQUFBLE9BQUEsR0FoQk5DLENBaUJBbkIsRUFmRixDQWlCQSxFQUlZb0IsSUFBYmhDLEdBQ0NpQyxXQUFFQyxVQUFnQkMsSUFBQSxnQkFBQSxDQWhCbkIsRUF5QkFwQyxXQUFlaUMsU0FBQUEsR0FwQmR6QixFQXFCQWYsUUFBVzRDLFNBQUFBLEdBQ1YsS0FBQVAsRUFBQWIsTUFJRmYsVUFBYTRCLEVBQUNHLEVBQWdCYixXQUFVLEVBRXBDM0IsWUFBVzRDLENBQU1DLENBdEJwQixDQUFDLENBQ0YsRUFHQXJDLGFBd0JHZ0MsaUJBQUEsUUFBQSxTQUFBQyxHQUVGQSxFQUFDQyxlQUFBLEVBeEJETixXQUFXLENBQUNqQyxXQUFZQyxVQUFXQyxhQUFjQyxZQUFZLEVBQzdEdUIsV0FBVzFCLFVBQVUsRUFDckJ1QixZQUFZcEIsWUFBYSxFQUFFLEVBQzNCZ0IsZ0JBQWdCaEIsV0FBVyxFQUMzQjZCLFlBQVksQ0FDYixDQUFDLEVBR0Q1QixlQUFlaUMsaUJBQWlCLFFBQVMsV0FDeEN4QyxXQUFXNEMsTUFBTUMsUUFBVSxPQUM1QixDQUFDLEVBSURwQyxjQUFjK0IsaUJBQWlCLFFBQVMsU0FBQUMsR0FDdkNBLEVBQUVDLGVBQWUsRUFDZDFDLFdBQVc0QyxNQUFNQyxRQUFVLE9BQzlCbkMsVUFBVXdCLFFBQVEsU0FBQVksR0FDakJBLEVBQUk3QixVQUFVTSxPQUFPLE9BQU8sQ0FDN0IsQ0FBQyxFQUNEVixVQUFVcUIsUUFBUSxTQUFBbkIsR0FDakJBLEVBQU1TLE1BQVEsRUFDZixDQUFDLENBRUYsQ0FBQyIsImZpbGUiOiJvZmZlcnRzLm1pbmkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3QgcG9wdXBQYW5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC1ib3gnKVxyXG5jb25zdCBpbnB1dEVtYWlsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VtYWlsJylcclxuY29uc3QgaW5wdXROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hbWUnKVxyXG5jb25zdCBpbnB1dFN1cm5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VybmFtZScpXHJcbmNvbnN0IGlucHV0Q3JlZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NyZWRpdC1jYXJkJylcclxuY29uc3Qgb3BlblBvcHVwUGFuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub2ZmZXJ0LWJ0bicpXHJcbmNvbnN0IHNlbmRQb3B1cEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZW5kLWJ0bicpXHJcbmNvbnN0IHBvcHVwQ2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAtY2xvc2UtYnRuJylcclxuY29uc3QgcG9wdXBUYWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBvcHVwLXRhYicpXHJcbmNvbnN0IHNlbmRNc2dCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdC1wb3B1cCcpXHJcbmNvbnN0IGFsbElucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wb3B1cC10YWIgaW5wdXQnKVxyXG5jb25zdCBlcnJvclRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZXJyb3ItdGV4dCcpXHJcblxyXG5cclxuY29uc3Qgc2hvd0Vycm9yID0gKGlucHV0LCBtc2cpID0+IHtcclxuXHRjb25zdCBwb3B1cFRhYiA9IGlucHV0LnBhcmVudEVsZW1lbnRcclxuXHRwb3B1cFRhYi5jbGFzc0xpc3QuYWRkKCdlcnJvcicpXHJcblx0XHJcblx0Y29uc3QgZXJyb3JNc2cgPSBpbnB1dC5uZXh0RWxlbWVudFNpYmxpbmdcclxuXHRlcnJvck1zZy50ZXh0Q29udGVudCA9IG1zZ1xyXG59XHJcbmNvbnN0IHJlbW92ZUVycm9yID0gaW5wdXQgPT4ge1xyXG5cdGNvbnN0IHBvcHVwVGFiID0gaW5wdXQucGFyZW50RWxlbWVudFxyXG5cdHBvcHVwVGFiLmNsYXNzTGlzdC5yZW1vdmUoJ2Vycm9yJylcclxufVxyXG5cclxuY29uc3QgY2hlY2tDcmVkaXRDYXJkID0gaW5wdXQgPT4ge1xyXG5cdGlmKGlucHV0LnZhbHVlID09PSAnJyl7XHJcblx0XHRzaG93RXJyb3IoaW5wdXQsIGlucHV0LnBsYWNlaG9sZGVyKVxyXG5cdH1cclxufVxyXG5cclxuY29uc3QgY2hlY2tMZW5ndGggPSAoaW5wdXQsIG51bWJlcikgPT4ge1xyXG5cdGlmKGlucHV0LnZhbHVlLmxlbmd0aCA8IG51bWJlcil7XHJcblx0XHRzaG93RXJyb3IoaW5wdXQsIGBOdW1lciBrYXJ0eSBtdXNpIHNrxYJhZGHEhyBzacSZIHogbWluLiAke251bWJlcn0gem5ha8Ozd2ApXHJcblx0fVxyXG5cdFxyXG59XHJcblxyXG5cclxuY29uc3QgY2hlY2tFbWFpbCA9IGVtYWlsID0+IHtcclxuXHRjb25zdCByZWdFeHAgPVxyXG5cdFx0L14oKFtePD4oKVtcXF1cXFxcLiw7Olxcc0BcXFwiXSsoXFwuW148PigpW1xcXVxcXFwuLDs6XFxzQFxcXCJdKykqKXwoXFxcIi4rXFxcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcXSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC9cclxuXHJcblx0aWYgKHJlZ0V4cC50ZXN0KGVtYWlsLnZhbHVlKSkge1xyXG5cdFx0cmVtb3ZlRXJyb3IoZW1haWwpXHJcblx0fSBlbHNlIHtcclxuXHRcdHNob3dFcnJvcihlbWFpbCwgYFdwcm93YWTFuiBwb3ByYXdueSBhZHJlcyBlLW1haWwuLi5gKVxyXG5cdH1cclxufVxyXG5cclxuXHJcbmNvbnN0IGNoZWNrRXJyb3JzID0gKCkgPT4ge1xyXG5cdGNvbnN0IGFsbFBvcHVwVGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wb3B1cC10YWInKVxyXG5cdGxldCBlcnJvcnMgPSAwXHJcblx0XHJcblx0YWxsUG9wdXBUYWJzLmZvckVhY2gocG9wdXBUYWIgPT4ge1xyXG5cdFx0aWYgKHBvcHVwVGFiLmNsYXNzTGlzdC5jb250YWlucygnZXJyb3InKSkge1xyXG5cdFx0XHRlcnJvcnMrK1xyXG5cdFx0fVxyXG5cdH0pXHJcblxyXG5cdGlmIChlcnJvcnMgPT09IDApIHtcclxuXHRcdHNlbmRNc2dCb3guY2xhc3NMaXN0LmFkZCgnc2hvdy1wb3B1cC1tc2cnKVxyXG5cdH1cclxuXHRcclxufVxyXG5cclxuXHJcblxyXG5jb25zdCBjaGVja0lucHV0ID0gaW5wdXQgPT4ge1xyXG5cdGlucHV0LmZvckVhY2goZWxlbWVudCA9PiB7XHJcblx0XHRpZiAoZWxlbWVudC52YWx1ZSA9PT0gJycpIHtcclxuXHRcdFx0c2hvd0Vycm9yKGVsZW1lbnQsIGVsZW1lbnQucGxhY2Vob2xkZXIpXHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZW1vdmVFcnJvcihlbGVtZW50KVxyXG5cdFx0fVxyXG5cdH0pXHJcbn1cclxuXHJcblxyXG5zZW5kUG9wdXBCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuXHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0Y2hlY2tJbnB1dChbaW5wdXRFbWFpbCwgaW5wdXROYW1lLCBpbnB1dFN1cm5hbWUsIGlucHV0Q3JlZGl0XSlcclxuXHRjaGVja0VtYWlsKGlucHV0RW1haWwpO1xyXG5cdGNoZWNrTGVuZ3RoKGlucHV0Q3JlZGl0LCAxNilcclxuXHRjaGVja0NyZWRpdENhcmQoaW5wdXRDcmVkaXQpXHJcblx0Y2hlY2tFcnJvcnMoKTtcclxufSlcclxuXHJcblxyXG5vcGVuUG9wdXBQYW5lbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHRwb3B1cFBhbmVsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXHJcbn0pXHJcblxyXG5cclxuXHJcbnBvcHVwQ2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuXHRlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBwb3B1cFBhbmVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuXHRwb3B1cFRhYnMuZm9yRWFjaCh0YWIgPT4ge1xyXG5cdFx0dGFiLmNsYXNzTGlzdC5yZW1vdmUoJ2Vycm9yJylcclxuXHR9KVxyXG5cdGFsbElucHV0cy5mb3JFYWNoKGlucHV0ID0+IHtcclxuXHRcdGlucHV0LnZhbHVlID0gJydcclxuXHR9KVxyXG5cdFxyXG59KVxyXG5cclxuIl19

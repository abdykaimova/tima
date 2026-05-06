const data = {
  russia: {
    name: "Россия",
    share: 52,
    cities: {
      moscow: {
        name: "Москва",
        migrants: 390000,
        sectors: ["Строительство", "Доставка", "Сервис"],
        income: 120000,
        living: "Высокие возможности, но дорогая аренда",
        reason: "Крупнейший рынок труда и быстрый поиск работы",
        reasonsMix: { work: 70, education: 10, life: 20 },
        professions: ["worker", "it"],
        motive: ["work", "life"]
      },
      petersburg: {
        name: "Санкт-Петербург",
        migrants: 145000,
        sectors: ["Логистика", "Сервис", "Производство"],
        income: 98000,
        living: "Комфортная инфраструктура, выше расходы",
        reason: "Стабильные вакансии и качество городской среды",
        reasonsMix: { work: 62, education: 15, life: 23 },
        professions: ["worker", "student"],
        motive: ["work", "education", "life"]
      },
      novosibirsk: {
        name: "Новосибирск",
        migrants: 47000,
        sectors: ["Склад", "Стройка", "Транспорт"],
        income: 76000,
        living: "Дешевле мегаполисов, меньше конкуренция",
        reason: "Доступная жизнь и работа в логистике",
        reasonsMix: { work: 74, education: 8, life: 18 },
        professions: ["worker"],
        motive: ["work"]
      },
      ekaterinburg: {
        name: "Екатеринбург",
        migrants: 52000,
        sectors: ["Промышленность", "Сервис", "Доставка"],
        income: 82000,
        living: "Сильный индустриальный рынок",
        reason: "Работа в промышленности и торговле",
        reasonsMix: { work: 71, education: 9, life: 20 },
        professions: ["worker", "it"],
        motive: ["work", "life"]
      }
    }
  },
  kazakhstan: {
    name: "Казахстан",
    share: 17,
    cities: {
      almaty: {
        name: "Алматы",
        migrants: 73000,
        sectors: ["Сервис", "IT", "Торговля"],
        income: 420000,
        living: "Близкая культура, высокая аренда",
        reason: "Комбинация зарплат и географической близости",
        reasonsMix: { work: 60, education: 18, life: 22 },
        professions: ["it", "student", "worker"],
        motive: ["work", "education", "life"]
      },
      astana: {
        name: "Астана",
        migrants: 41000,
        sectors: ["Стройка", "Госуслуги", "Логистика"],
        income: 390000,
        living: "Новые районы и стабильный рынок",
        reason: "Карьерные шансы в столичной экономике",
        reasonsMix: { work: 64, education: 14, life: 22 },
        professions: ["worker", "student"],
        motive: ["work", "life"]
      }
    }
  },
  turkey: {
    name: "Турция",
    share: 9,
    cities: {
      istanbul: {
        name: "Стамбул",
        migrants: 36000,
        sectors: ["Сервис", "Туризм", "Торговля"],
        income: 32000,
        living: "Динамично, но волатильная экономика",
        reason: "Бизнес и сервисный сектор",
        reasonsMix: { work: 55, education: 20, life: 25 },
        professions: ["worker", "student"],
        motive: ["work", "education", "life"]
      },
      ankara: {
        name: "Анкара",
        migrants: 12000,
        sectors: ["Образование", "Офис", "Сервис"],
        income: 29000,
        living: "Спокойнее столицы туризма",
        reason: "Учеба и административные вакансии",
        reasonsMix: { work: 45, education: 35, life: 20 },
        professions: ["student", "it"],
        motive: ["education", "work"]
      }
    }
  },
  korea: {
    name: "Южная Корея",
    share: 6,
    cities: {
      seoul: {
        name: "Сеул",
        migrants: 19000,
        sectors: ["Технологии", "Производство", "Сервис"],
        income: 2600000,
        living: "Высокий доход, высокий стресс",
        reason: "Технологичный рынок и достойная оплата",
        reasonsMix: { work: 68, education: 14, life: 18 },
        professions: ["it", "worker", "student"],
        motive: ["work", "education"]
      },
      busan: {
        name: "Пусан",
        migrants: 7000,
        sectors: ["Логистика", "Порты", "Сервис"],
        income: 2100000,
        living: "Морская экономика и умеренный ритм",
        reason: "Портовый рынок труда",
        reasonsMix: { work: 72, education: 9, life: 19 },
        professions: ["worker"],
        motive: ["work"]
      }
    }
  },
  usa: {
    name: "США",
    share: 4,
    cities: {
      ny: {
        name: "Нью-Йорк",
        migrants: 11000,
        sectors: ["Сервис", "Медиа", "Финансы"],
        income: 4600,
        living: "Максимум возможностей, дорогая жизнь",
        reason: "Карьерные перспективы и диаспора",
        reasonsMix: { work: 50, education: 22, life: 28 },
        professions: ["it", "student", "worker"],
        motive: ["work", "education", "life"]
      },
      chicago: {
        name: "Чикаго",
        migrants: 5000,
        sectors: ["Логистика", "Сервис", "Производство"],
        income: 3900,
        living: "Баланс дохода и стоимости жизни",
        reason: "Рабочие позиции и стабильный спрос",
        reasonsMix: { work: 61, education: 15, life: 24 },
        professions: ["worker", "student"],
        motive: ["work", "life"]
      }
    }
  },
  europe: {
    name: "Европа",
    share: 12,
    cities: {
      berlin: {
        name: "Берлин",
        migrants: 9000,
        sectors: ["IT", "Креатив", "Сервис"],
        income: 2900,
        living: "Качественные сервисы, дорогая аренда",
        reason: "Технологии и образование",
        reasonsMix: { work: 49, education: 31, life: 20 },
        professions: ["it", "student"],
        motive: ["education", "work", "life"]
      },
      warsaw: {
        name: "Варшава",
        migrants: 8000,
        sectors: ["Логистика", "IT", "Сервис"],
        income: 2200,
        living: "Быстрорастущий рынок",
        reason: "Работа и близость региона",
        reasonsMix: { work: 63, education: 16, life: 21 },
        professions: ["worker", "it", "student"],
        motive: ["work", "life"]
      }
    }
  }
};

const levelCountries = document.getElementById("levelCountries");
const levelCities = document.getElementById("levelCities");
const levelDetails = document.getElementById("levelDetails");
const breadcrumbs = document.getElementById("breadcrumbs");
const backBtn = document.getElementById("backBtn");
const professionFilter = document.getElementById("professionFilter");
const reasonFilter = document.getElementById("reasonFilter");
const cityCompareA = document.getElementById("cityCompareA");
const cityCompareB = document.getElementById("cityCompareB");
const compareBtn = document.getElementById("compareBtn");
const compareResult = document.getElementById("compareResult");
const scrollBtn = document.querySelector("[data-scroll]");

let state = { level: "countries", countryKey: null, cityKey: null };
let cityChart;
let compareChart;

function flatCities() {
  const arr = [];
  Object.entries(data).forEach(([countryKey, country]) => {
    Object.entries(country.cities).forEach(([cityKey, city]) => {
      arr.push({ id: `${countryKey}:${cityKey}`, countryKey, cityKey, countryName: country.name, ...city });
    });
  });
  return arr;
}

function formatIncome(value, countryKey) {
  if (countryKey === "russia") return `${new Intl.NumberFormat("ru-RU").format(value)} RUB`;
  if (countryKey === "kazakhstan") return `${new Intl.NumberFormat("ru-RU").format(value)} KZT`;
  if (countryKey === "korea") return `${new Intl.NumberFormat("ru-RU").format(value)} KRW`;
  if (countryKey === "usa") return `$${value}`;
  if (countryKey === "europe") return `EUR ${value}`;
  if (countryKey === "turkey") return `${new Intl.NumberFormat("ru-RU").format(value)} TRY`;
  return `${value}`;
}

function switchView(view) {
  [levelCountries, levelCities, levelDetails].forEach((v) => v.classList.remove("active"));
  view.classList.add("active");
}

function getFilteredCities(countryObj) {
  const prof = professionFilter.value;
  const reason = reasonFilter.value;
  return Object.entries(countryObj.cities).filter(([, city]) => {
    const profOk = prof === "all" || city.professions.includes(prof);
    const reasonOk = reason === "all" || city.motive.includes(reason);
    return profOk && reasonOk;
  });
}

function renderCountries() {
  const cards = Object.entries(data)
    .map(
      ([key, country]) => `
      <button class="card-btn" data-country="${key}" title="Кликните, чтобы открыть города">
        <strong>${country.name}</strong><br>
        <small>Доля потока: ${country.share}%</small>
      </button>
    `
    )
    .join("");

  levelCountries.innerHTML = `<div class="cards-grid">${cards}</div>`;

  levelCountries.querySelectorAll("[data-country]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state = { level: "cities", countryKey: btn.dataset.country, cityKey: null };
      render();
    });
  });
}

function renderCities() {
  const country = data[state.countryKey];
  const filtered = getFilteredCities(country);

  if (!filtered.length) {
    levelCities.innerHTML = `<p>Нет городов по выбранным фильтрам.</p>`;
    return;
  }

  levelCities.innerHTML = `
    <h3>${country.name}: выберите город</h3>
    <div class="cards-grid">
      ${filtered
        .map(
          ([cityKey, city]) => `
            <button class="city-btn" data-city="${cityKey}" title="Погрузиться в статистику города">
              <strong>${city.name}</strong><br>
              <small>Кыргызстанцев: ~${new Intl.NumberFormat("ru-RU").format(city.migrants)}</small>
            </button>
          `
        )
        .join("")}
    </div>
  `;

  levelCities.querySelectorAll("[data-city]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state = { ...state, level: "details", cityKey: btn.dataset.city };
      render();
    });
  });
}

function renderCityChart(city) {
  const canvas = document.getElementById("cityChart");
  if (cityChart) cityChart.destroy();

  cityChart = new Chart(canvas, {
    type: "doughnut",
    data: {
      labels: ["Работа", "Образование", "Качество жизни"],
      datasets: [
        {
          data: [city.reasonsMix.work, city.reasonsMix.education, city.reasonsMix.life],
          backgroundColor: ["#a33d2f", "#b98b36", "#1d4938"]
        }
      ]
    },
    options: { plugins: { legend: { position: "bottom" } } }
  });
}

function renderDetails() {
  const country = data[state.countryKey];
  const city = country.cities[state.cityKey];

  levelDetails.innerHTML = `
    <div class="detail-layout">
      <div>
        <h3>${city.name}, ${country.name}</h3>
        <div class="stats-list">
          <p title="Оценочные данные"><strong>Количество кыргызстанцев:</strong> ~${new Intl.NumberFormat("ru-RU").format(city.migrants)}</p>
          <p><strong>Средний доход:</strong> ${formatIncome(city.income, state.countryKey)}</p>
          <p><strong>Условия жизни:</strong> ${city.living}</p>
          <p><strong>Причина выбора:</strong> ${city.reason}</p>
        </div>
        <div class="badges">
          ${city.sectors.map((s) => `<span class="badge" title="Популярная сфера занятости">${s}</span>`).join("")}
        </div>
        <div class="reason-box">Индекс причин: работа ${city.reasonsMix.work}%, образование ${city.reasonsMix.education}%, качество жизни ${city.reasonsMix.life}%</div>
      </div>
      <div class="chart-wrap">
        <canvas id="cityChart"></canvas>
      </div>
    </div>
  `;

  renderCityChart(city);
}

function renderBreadcrumbs() {
  if (state.level === "countries") {
    breadcrumbs.textContent = "Карта направлений";
    return;
  }

  if (state.level === "cities") {
    breadcrumbs.textContent = `Карта направлений > ${data[state.countryKey].name}`;
    return;
  }

  breadcrumbs.textContent = `Карта направлений > ${data[state.countryKey].name} > ${data[state.countryKey].cities[state.cityKey].name}`;
}

function updateBackBtn() {
  backBtn.disabled = state.level === "countries";
}

function render() {
  renderBreadcrumbs();
  updateBackBtn();

  if (state.level === "countries") {
    renderCountries();
    switchView(levelCountries);
    return;
  }

  if (state.level === "cities") {
    renderCities();
    switchView(levelCities);
    return;
  }

  renderDetails();
  switchView(levelDetails);
}

function initCompareOptions() {
  const cities = flatCities();
  const options = cities
    .map((c) => `<option value="${c.id}">${c.name} (${c.countryName})</option>`)
    .join("");

  cityCompareA.innerHTML = options;
  cityCompareB.innerHTML = options;
  cityCompareB.selectedIndex = Math.min(1, cityCompareB.options.length - 1);
}

function parseCityId(id) {
  const [countryKey, cityKey] = id.split(":");
  return { countryKey, cityKey, city: data[countryKey].cities[cityKey], country: data[countryKey] };
}

function renderCompareChart(a, b) {
  const ctx = document.getElementById("compareChart");
  if (compareChart) compareChart.destroy();

  compareChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Доход (норм.)", "Условия жизни", "Популярность"],
      datasets: [
        {
          label: a.city.name,
          data: [a.city.income, a.city.reasonsMix.life, a.city.migrants],
          backgroundColor: "rgba(163, 61, 47, 0.75)"
        },
        {
          label: b.city.name,
          data: [b.city.income, b.city.reasonsMix.life, b.city.migrants],
          backgroundColor: "rgba(29, 73, 56, 0.75)"
        }
      ]
    },
    options: {
      scales: { y: { beginAtZero: true } },
      plugins: { tooltip: { enabled: true } }
    }
  });
}

function compareCities() {
  const first = parseCityId(cityCompareA.value);
  const second = parseCityId(cityCompareB.value);

  if (cityCompareA.value === cityCompareB.value) {
    compareResult.textContent = "Выберите два разных города.";
    return;
  }

  const incomeWinner = first.city.income > second.city.income ? first.city.name : second.city.name;
  const popularityWinner = first.city.migrants > second.city.migrants ? first.city.name : second.city.name;

  compareResult.innerHTML = `
    Доход выше: <strong>${incomeWinner}</strong>.<br>
    Более популярное направление: <strong>${popularityWinner}</strong>.<br>
    ${first.city.name}: ${first.city.living}.<br>
    ${second.city.name}: ${second.city.living}.
  `;

  renderCompareChart(first, second);
}

function setupEvents() {
  professionFilter.addEventListener("change", () => {
    if (state.level !== "countries") render();
  });
  reasonFilter.addEventListener("change", () => {
    if (state.level !== "countries") render();
  });

  backBtn.addEventListener("click", () => {
    if (state.level === "details") {
      state.level = "cities";
    } else if (state.level === "cities") {
      state = { level: "countries", countryKey: null, cityKey: null };
    }
    render();
  });

  compareBtn.addEventListener("click", compareCities);

  if (scrollBtn) {
    scrollBtn.addEventListener("click", () => {
      const target = document.querySelector(scrollBtn.dataset.scroll);
      if (target) target.scrollIntoView({ behavior: "smooth" });
    });
  }
}

function init() {
  setupEvents();
  initCompareOptions();
  render();
  compareCities();
}

init();

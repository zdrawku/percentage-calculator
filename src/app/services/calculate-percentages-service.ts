import { ResultModel } from '../models/CalculatePercentages/result-model';
import { FetchApi } from './fetch-api-service';

const API_ENDPOINT = 'https://perc-calc.appbuilder.dev';

class CalculatePercentagesService {
  public getResultModel = async (whatIs: number, ofWhat: number): Promise<ResultModel | undefined> => {
    const query = new URLSearchParams({
      'whatIs': `${whatIs}`,
      'ofWhat': `${ofWhat}` });
    return await FetchApi.fetchApiResponse<ResultModel | undefined>(`${API_ENDPOINT}/PercentageCalculations/CalcWhatIsXpercentOfY?${query}`, undefined);
  }

  public getResultModel1 = async (whatIs: number = 50, ofWhat: number = 55): Promise<ResultModel | undefined> => {
    const query = new URLSearchParams({
      'whatIs': `${whatIs}`,
      'ofWhat': `${ofWhat}` });
    return await FetchApi.fetchApiResponse<ResultModel | undefined>(`${API_ENDPOINT}/PercentageCalculations/CalcWhatIsPercentChangeFromXtoY?${query}`, undefined);
  }

  public getResultModel2 = async (whatIs: number = 20, ofWhat: number = 100): Promise<ResultModel | undefined> => {
    const query = new URLSearchParams({
      'whatIs': `${whatIs}`,
      'ofWhat': `${ofWhat}` });
    return await FetchApi.fetchApiResponse<ResultModel | undefined>(`${API_ENDPOINT}/PercentageCalculations/CalcXisWhatPercentOfY?${query}`, undefined);
  }
}
export const calculatePercentagesService: CalculatePercentagesService = new CalculatePercentagesService();
